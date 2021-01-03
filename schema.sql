CREATE TABLE expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user text,
    what text,
    amount int,
    deleted boolean,
    created_at timestamp   DEFAULT CURRENT_TIMESTAMP

);
