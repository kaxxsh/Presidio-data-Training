# Bike Company Management System

## Overview

The Bike Company Management System is designed to manage the inventory and details of bikes in a database. The system uses a SQL-based solution to track and manage bike data, including their models, manufacturers, prices, and stock levels. This system also maintains an audit trail of all changes (insertions, updates, and deletions) through a target table, ensuring data integrity and providing a historical record.

## Database Structure

### 1. **Database**
- **Name**: `BikeCompanyDb`

### 2. **Tables**
- **`bike_src`**: The source table where the primary data about bikes is stored.
  - **Columns**:
    - `Id`: INT (Primary Key, Identity)
    - `BikeModel`: NVARCHAR(100)
    - `Manufacturer`: NVARCHAR(100)
    - `Price`: DECIMAL(10, 2)
    - `Stock`: INT
    - `CreatedAt`: DATETIME

- **`bike_tgt`**: The target table that logs all changes from `bike_src` with a soft delete mechanism.
  - **Columns**:
    - `Id`: INT (Primary Key, Identity)
    - `BikeId`: INT (Foreign Key from `bike_src`)
    - `BikeModel`: NVARCHAR(100)
    - `Manufacturer`: NVARCHAR(100)
    - `Price`: DECIMAL(10, 2)
    - `Stock`: INT
    - `IsDeleted`: BIT (Default 0)
    - `CreatedAt`: DATETIME

## Stored Procedures

- **`Insert_Bike`**: Inserts a new bike record into the target table whenever a new entry is made in the source table.
- **`Update_Bike`**: Inserts a new record into the target table when a bike's details are updated in the source table, allowing for version tracking.
- **`Delete_Bike`**: Marks a bike record as deleted in the target table when it is deleted from the source table (soft delete).

## Triggers

- **`Bike_Insert_Trigger`**: Triggered after an insert operation on `bike_src`, it invokes `Insert_Bike`.
- **`Bike_Update_Trigger`**: Triggered after an update operation on `bike_src`, it invokes `Update_Bike`.
- **`Bike_Delete_Trigger`**: Triggered after a delete operation on `bike_src`, it invokes `Delete_Bike`.

## Testing

The system includes a set of SQL statements to test the functionality:

1. **Inserting Data**: 
   - Insert new bike records into `bike_src`.
   - Verify that corresponding records are added to `bike_tgt`.

2. **Updating Data**:
   - Update existing bike records in `bike_src`.
   - Verify that new versions of the records are added to `bike_tgt`.

3. **Deleting Data**:
   - Delete bike records from `bike_src`.
   - Verify that the `IsDeleted` flag is set to 1 for the corresponding records in `bike_tgt`.

## Example Queries

- **Insert into `bike_src`:**
    ```sql
    INSERT INTO bike_src (BikeModel, Manufacturer, Price, Stock, CreatedAt)
    VALUES ('Ducati Panigale V4', 'Ducati', 25000, 5, GETDATE());
    ```

- **Update `bike_src`:**
    ```sql
    UPDATE bike_src
    SET Price = 26000, Stock = 6
    WHERE Id = 1;
    ```

- **Delete from `bike_src`:**
    ```sql
    DELETE FROM bike_src
    WHERE Id = 2;
    ```

## Installation

To set up the Bike Company Management System:

1. **Create the Database**: 
    ```sql
    CREATE DATABASE BikeCompanyDb;
    USE BikeCompanyDb;
    ```

2. **Create the Tables**: Use the provided SQL script to create `bike_src` and `bike_tgt` tables.

3. **Create Stored Procedures and Triggers**: Implement the stored procedures and triggers using the provided SQL script.

4. **Test the Setup**: Use the example queries to test the system's functionality.

## Conclusion

The Bike Company Management System provides a robust solution for managing bike inventories with an integrated auditing mechanism. The system ensures data consistency and integrity across the database, while also maintaining a historical record of all transactions.
