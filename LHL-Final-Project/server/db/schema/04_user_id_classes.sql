DROP TABLE IF EXISTS user_id_class CASCADE;
CREATE TABLE user_id_class (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE
);
