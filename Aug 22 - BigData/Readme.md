# COVID-19 Data Analysis using PySpark

This project performs various analyses on a COVID-19 dataset using PySpark. The script reads data from a CSV file, processes it, and extracts meaningful insights regarding COVID-19 cases, deaths, and recoveries.

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Data Processing](#data-processing)
- [Analyses Performed](#analyses-performed)
- [How to Run](#how-to-run)
- [Output](#output)
- [License](#license)

## Requirements
- [Apache Spark](https://spark.apache.org/downloads.html) (v2.4+)
- [Python](https://www.python.org/downloads/) (v3.6+)
- PySpark library: Install using `pip install pyspark`

## Setup

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/covid-data-analysis-pyspark.git
    cd covid-data-analysis-pyspark
    ```

2. **Prepare the Dataset:**
    - Place your CSV file (`complete.csv`) containing COVID-19 data in the appropriate directory.
    - Update the file path in the script (`covid_analysis.py`) to point to the location of your dataset.

3. **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Data Processing

The script reads and processes a CSV file containing COVID-19 data. The following columns are expected in the dataset:
- `Total Confirmed cases`: Number of confirmed cases.
- `New recovered`: Number of newly recovered cases.
- `Name of State / UT`: Name of the state or union territory.
- `Death`: Number of deaths.
- `Date`: Date of the data record.

The script performs several data type conversions to ensure proper handling of the data.

## Analyses Performed

1. **Day with the Most COVID-19 Cases:**
   - Determines the date with the highest number of confirmed cases.

2. **State with the Second-Largest Number of COVID-19 Cases:**
   - Identifies the state with the second-highest total confirmed cases.

3. **Union Territory with the Least Number of Deaths:**
   - Finds the union territory with the lowest number of deaths.

4. **State with the Lowest Death-to-Confirmed-Cases Ratio:**
   - Calculates and identifies the state with the lowest ratio of deaths to confirmed cases.

5. **Convert State Names to Lowercase:**
   - Converts all state names to lowercase and displays distinct values.

6. **Month with the Most Newly Recovered Cases:**
   - Determines the month with the highest number of newly recovered cases.

## How to Run

1. **Execute the Script:**
    ```bash
    spark-submit covid_analysis.py
    ```

2. **View the Output:**
   - The results of the analysis will be printed in the console. Each section corresponds to a different analysis as described above.

## Output

The script produces the following outputs:
- The date with the most COVID-19 cases.
- The state with the second-largest number of COVID-19 cases.
- The union territory with the least number of deaths.
- The state with the lowest death-to-confirmed-cases ratio.
- A list of all state names converted to lowercase.
- The month with the most newly recovered cases.

