# SQL
Databases are used to store and manage lots of data in a structured way.

SQL Stands for:
    - **S**tructured
    - **Q**uery
    - **L**anguage

- [SQL](#sql)
  - [Relational Databases](#relational-databases)
  - [Commands](#commands)
    - [DDL](#ddl)
    - [DML](#dml)
  - [Basic Commands](#basic-commands)
    - [Data Types](#data-types)
    - [Creating a Table](#creating-a-table)
    - [Inserting Data into a Table](#inserting-data-into-a-table)
  - [Queries](#queries)
    - [Selecting Columns](#selecting-columns)
    - [Calculative Column](#calculative-column)
    - [Ordering Columns](#ordering-columns)
    - [Where](#where)
    - [Where](#where-1)
    - [Between](#between)
    - [In](#in)
    - [Like](#like)
    - [Not](#not)
    - [Count](#count)
    - [Min / Max](#min--max)
    - [SUM](#sum)
    - [AVG](#avg)
  - [Aggregate Functions](#aggregate-functions)
  - [Group By](#group-by)
  - [Aggregating](#aggregating)
  - [Join](#join)
  - [Limit](#limit)
- [NoSQL Databases](#nosql-databases)
  - [What are NoSQL Databases](#what-are-nosql-databases)
  - [MongoDB](#mongodb)

There are many different flavors of SQL, like mySQL, postgreSQL and Oracle. They're all very similar but the syntax can differ. The below will be written with mySQL in mind.

I'll be using https://www.db-fiddle.com/ for this documentation.

Unlike Python, `""` and `''` ase not interchangable. **When in doubt, use single quotes!**

Statements always end in `;`.

## Relational Databases
> 👉 *To be Added*

## Commands
There are two categories of commands.

### DDL
DDL stands for Data definition language. This will be used for various purposes:
 - To create or alter tables

### DML
DML stands for Data manipulation language. This will be used for:
 - **Select:** used to retrieve data
 - **Insert:** to insert data into a table
 - **Update:** data inside a table
 - **Delete:** data in a table

## Basic Commands

### Data Types

| User-Friendly Data Type | SQL Data Type | Parameters   | Description                                               | Example                           |
|------------------------|---------------|--------------|-----------------------------------------------------------|-----------------------------------|
| Whole Number           | INT           |              | Integer value.                                           | `age INT`                         |
| Text                   | VARCHAR       | Length       | Variable-length character string.                         | `name VARCHAR(50)`                |
| Fixed-Length Text      | CHAR          | Length       | Fixed-length character string.                            | `country CHAR(2)`                 |
| Decimal Number         | DECIMAL       | Precision, Scale | Fixed-point decimal number.                             | `salary DECIMAL(10, 2)`           |
| Floating-Point Number  | FLOAT         |              | Floating-point number with decimal precision.             | `rating FLOAT`                    |
| Boolean                | BOOLEAN       |              | Represents a logical value (True or False).                | `is_active BOOLEAN`               |
| Date                   | DATE          |              | Represents a date (year, month, day).                     | `birth_date DATE`                 |
| Time                   | TIME          |              | Represents a time (hour, minute, second, microsecond).    | `start_time TIME`                 |
| Date and Time          | DATETIME      |              | Represents a date and time (year, month, day, hour, minute, second, microsecond). | `created_at DATETIME` |
| Binary Data            | BLOB          |              | Binary Large Object for storing binary data.              | `image BLOB`                      |
| Enumerated Values      | ENUM          | Values       | Defines a set of allowed values for a column.             | `status ENUM('active', 'inactive')` |


### Creating a Table
In order to create a table you use `CREATE TABLE`, followed by the table name and for the columns, you wrap them in parenthesis.

For each column you give it a name, and follow it with the datatype with a space in between.

**Here's an Example:**
```sql
CREATE TABLE products
(
    product_id int NOT NULL AUTO_INCREMENT,
    name varchar(30),
    price decimal(6,2),
    stock int,
    PRIMARY KEY (product_id)
);
```

### Inserting Data into a Table
```sql
INSERT INTO product (name, price, stock) VALUES
    ('apple', 0.25, 25)
    ('broccoli', 0.75, 10)
    ('carrot', 0.1, 100)
    ('dragonfruit', 1.5, 0)
    ('elderberries', 5.5, 0)
```

## Queries

### Selecting Columns
To select a column from a table, you use the `SELECT` keyword followed by the column names.

**Example:**
```sql
SELECT price FROM product;
```
You can also select a few columns, by seperating them with a comma:
```sql
SELECT name, price FROM product;
```

And if you want, you can even use an asterisk to select all columns:
```sql
SELECT * FROM product;
```

So now all the columns look like this:
| product_id | name         | price | stock |
| ---------- | ------------ | ----- | ----- |
| 1          | apple        | 0.25  | 25    |
| 2          | broccoli     | 0.75  | 10    |
| 3          | carrot       | 0.10  | 100   |
| 4          | dragonfruit  | 1.50  | 0     |
| 5          | elderberries | 5.50  | 0     |
| 6          | fennel       | 4.50  | 8     |
| 7          | grapefruit   | 0.15  | 28    |


[View on DB Fiddle](https://www.db-fiddle.com/f/7tpSpMGjkB569C3jSvXC6J/0)

### Calculative Column
When importing, you can add calculations and have them go to another column

```sql
SELECT
    name,
    price,
    price * 1.2 AS price_with_vat
FROM product;
```
Now the output looks like this:
| name         | price | price_with_vat |
| ------------ | ----- | -------------- |
| apple        | 0.25  | 0.300          |
| broccoli     | 0.75  | 0.900          |
| carrot       | 0.10  | 0.120          |
| dragonfruit  | 1.50  | 1.800          |
| elderberries | 5.50  | 6.600          |
| fennel       | 4.50  | 5.400          |
| grapefruit   | 0.15  | 0.180          |

### Ordering Columns
To order a column, you use the `ORDER BY` keyword, followed by the column name and then how you want to sort them.

**Example:**
```sql
SELECT *
FROM product
ORDER BY price ASC;
```

**Output:**
| product_id | name         | price | stock |
| ---------- | ------------ | ----- | ----- |
| 3          | carrot       | 0.10  | 100   |
| 7          | grapefruit   | 0.15  | 28    |
| 1          | apple        | 0.25  | 25    |
| 2          | broccoli     | 0.75  | 10    |
| 4          | dragonfruit  | 1.50  | 0     |
| 6          | fennel       | 4.50  | 8     |
| 5          | elderberries | 5.50  | 0     |

### Where
`WHERE` is used to only import rows that meet a criteria. To use it, you use the `WHERE` keyword followed by the column name, then the criterea.

**Example Input:**
```sql
SELECT *
FROM product
WHERE stock > 0
```

**Example Output:**
| product_id | name       | price | stock |
| ---------- | ---------- | ----- | ----- |
| 1          | apple      | 0.25  | 25    |
| 2          | broccoli   | 0.75  | 10    |
| 3          | carrot     | 0.10  | 100   |
| 6          | fennel     | 4.50  | 8     |
| 7          | grapefruit | 0.15  | 28    |

You can also do things like `= 0.1`, `BETWEEN 1 AND 5` or even one of the following values; `WHERE name IN ("apple", "dragonfruit", "fennel");`.

You can also query by a name that is like something, so if I wanted to query by names that end in `fruit` I'd do this:
```sql
SELECT *
FROM product
WHERE name LIKE "%fruit";
```

### Where
> 👉 *To be Added*

### Between
> 👉 *To be Added*

### In
> 👉 *To be Added*

### Like
> 👉 *To be Added*

### Not
> 👉 *To be Added*


### Count
So if you wanted to find an average price of the `price` column, you'd have to look at all rows first. So do to this we'd first use `count` to get the number of rows.
```sql
SELECT COUNT(*)
FROM product;
```
Now we've got the number of rows in the column. If for example we wanted to count how many products were out of stock, we could do:
```sql
SELECT COUNT(*)
FROM product;
WHERE stock = 0;
```

### Min / Max
To get the minimum price I could do:
```sql
SELECT MIN(price)
FROM product
```
This gets the minimum price. For the maximum, I just change `min` to `max`.

### SUM
If we wanted the total stock from all columns, I could just do `SUM()`, like this:
```sql
SELECT SUM(stock)
FROM product;
```

### AVG
If we wanted the average price of a column, we could do this:
```sql
SELECT AVG(price)
FROM product;
```

## Aggregate Functions
Aggregating functions means to perform calculations across multiple rows, generally on a single column.

If I wanted to get the minimum price and then load all the products that had that minimum price, I could combine the queries like this:
```sql
SELECT *
FROM product
WHERE price = (SELECT MIN(price) FROM product);
```
So I just put `SELECT MIN(price) FROM product` inside the `WHERE` action.

## Group By
Group By allows us to divide rows into groups based off something. So if we had a field of category
> 👉 *To be Added*

## Aggregating
> 👉 *To be Added* 

## Join
(four types)
> 👉 *To be Added* 

## Limit
> 👉 *To be Added* 

# NoSQL Databases
SQL databases are also known as relational database, they're the more traditional and most popular type of database. However in more recent years, a type of database referred to as NoSQL database has started to become a lot more popular.

## What are NoSQL Databases
A NoSQL database is essentially a database that stores data in any other way then the traditional model. It doesn't have a strict meaning, and is often thought to stand for **Not only SQL**, rather then none at all.

## MongoDB
https://www.youtube.com/watch?v=ofme2o29ngU&t=5s&ab_channel=WebDevSimplified
mongodb.com/try/download/shell