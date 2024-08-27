-- Creating the database and using it
CREATE DATABASE BikeCompanyDb;
USE BikeCompanyDb;

-- Creating the source and target tables
CREATE TABLE bike_src (
    Id INT PRIMARY KEY IDENTITY,
    BikeModel NVARCHAR(100),
    Manufacturer NVARCHAR(100),
    Price DECIMAL(10, 2),
    Stock INT,
	CreatedAt DATETIME
);

CREATE TABLE bike_tgt (
    Id INT PRIMARY KEY IDENTITY,
    BikeId INT,
    BikeModel NVARCHAR(100),
    Manufacturer NVARCHAR(100),
    Price DECIMAL(10, 2),
    Stock INT,
    IsDeleted BIT DEFAULT 0,
	CreatedAt DATETIME
);

-- Stored procedures for Insertion, Updation, and Deletion

CREATE OR ALTER PROCEDURE Insert_Bike
    @Id INT,
    @BikeModel NVARCHAR(100),
    @Manufacturer NVARCHAR(100),
    @Price DECIMAL(10, 2),
    @Stock INT,
    @CreatedAt DATETIME
AS
BEGIN
    INSERT INTO bike_tgt (BikeId, BikeModel, Manufacturer, Price, Stock, IsDeleted, CreatedAt)
    VALUES (@Id, @BikeModel, @Manufacturer, @Price, @Stock, 0, @CreatedAt);
END;


CREATE OR ALTER PROCEDURE Update_Bike
    @Id INT,
    @BikeModel NVARCHAR(100),
    @Manufacturer NVARCHAR(100),
    @Price DECIMAL(10, 2),
    @Stock INT
AS
BEGIN
    INSERT INTO bike_tgt (BikeId, BikeModel, Manufacturer, Price, Stock, IsDeleted, CreatedAt)
    VALUES (@Id, @BikeModel, @Manufacturer, @Price, @Stock, 0, GETDATE());
END;


CREATE OR ALTER PROCEDURE Delete_Bike
    @Id INT
AS
BEGIN
    UPDATE bike_tgt
    SET IsDeleted = 1
    WHERE BikeId = @Id;
END;


-- Triggers
CREATE OR ALTER TRIGGER Bike_Insert_Trigger
ON bike_src
AFTER INSERT
AS
BEGIN
    DECLARE @Id INT, @BikeModel NVARCHAR(100), @Manufacturer NVARCHAR(100), @Price DECIMAL(10, 2), @Stock INT, @CreatedAt DATETIME;

    SELECT @Id = Id, @BikeModel = BikeModel, @Manufacturer = Manufacturer, @Price = Price, @Stock = Stock, @CreatedAt = CreatedAt
    FROM inserted;

    EXEC Insert_Bike @Id, @BikeModel, @Manufacturer, @Price, @Stock, @CreatedAt;
END;


CREATE OR ALTER TRIGGER Bike_Update_Trigger
ON bike_src
AFTER UPDATE
AS
BEGIN
    DECLARE @Id INT, @BikeModel NVARCHAR(100), @Manufacturer NVARCHAR(100), @Price DECIMAL(10, 2), @Stock INT;

    SELECT @Id = Id, @BikeModel = BikeModel, @Manufacturer = Manufacturer, @Price = Price, @Stock = Stock
    FROM inserted;

    EXEC Update_Bike @Id, @BikeModel, @Manufacturer, @Price, @Stock;
END;


CREATE OR ALTER TRIGGER Bike_Delete_Trigger
ON bike_src
AFTER DELETE
AS
BEGIN
    DECLARE @Id INT;

    SELECT @Id = Id
    FROM deleted;

    EXEC Delete_Bike @Id;
END;


-- Testing

-- Insert into bike_src
INSERT INTO bike_src (BikeModel, Manufacturer, Price, Stock, CreatedAt)
VALUES ('Ducati Panigale V4', 'Ducati', 25000, 5, GETDATE());

INSERT INTO bike_src (BikeModel, Manufacturer, Price, Stock, CreatedAt)
VALUES ('Yamaha R1', 'Yamaha', 20000, 10, GETDATE());

-- Check both tables
SELECT * FROM bike_src;
SELECT * FROM bike_tgt;

-- Update bike_src
UPDATE bike_src
SET Price = 26000, Stock = 6
WHERE Id = 1;

-- Check both tables after update
SELECT * FROM bike_src;
SELECT * FROM bike_tgt;

-- Delete from bike_src
DELETE FROM bike_src
WHERE Id = 2;

-- Check both tables after delete
SELECT * FROM bike_src;
SELECT * FROM bike_tgt;
