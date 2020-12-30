CREATE TABLE expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user text,
    amount int,
    created_at timestamp   DEFAULT CURRENT_TIMESTAMP

);
