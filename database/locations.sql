CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  altitude INT NOT NULL,
  lat NUMERIC(6, 4) NOT NULL CHECK (lat >= -90) CHECK (LAT <= 90),
  lon NUMERIC(7, 4) NOT NULL CHECK (lon >= -180) CHECK (LAT <= 180)
);

INSERT INTO locations
  (name, altitude, lat, lon)
  VALUES
  ('Madison Campground', 2083.00, 44.6446, -110.8662),
  ('Old Faithful', 2241, 44.4603, -110.8280),
  ('Grant Village', 2378, 44.3896, -110.5554),
  ('Lake Village', 2370, 44.5517, -110.4017),
  ('Pahaska Tepee', 2032, 44.5027, -109.9632),
  ('Canyon Village', 2416, 44.7355, -110.4911),
  ('Tower Fall', 2010, 44.8894, -110.3904),
  ('Museum of the National Park Ranger', 2277, 44.7378, -110.6969);