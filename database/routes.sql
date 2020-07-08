CREATE TABLE routes
(
    id SERIAL PRIMARY KEY,
    number_of_days INTEGER,
    stops INTEGER,
    stop1 INTEGER,
    stop2 INTEGER,
    stop3 INTEGER,
    stop4 INTEGER,
    maplink text

);

INSERT INTO routes
    (number_of_days, stops, stop1, stop2, stop3, stop4, maplink)
VALUES
    (3, 2, 1, 6, 0, 0, 'https://www.mapquest.com/embed/my-maps/49b854c5-0818-4356-84a3-2ec713d49f5a?center=44.83834308566653,-110.77377319335936&zoom=10&maptype=map'),
    (4, 3, 1, 2, 3, 0, 'https://www.mapquest.com/embed/my-maps/cfa01c10-e130-4c62-bff6-956c40713c51?center=44.538121733294545,-110.68519592285159&zoom=10&maptype=map'),
    (5, 4, 7, 8, 4, 5, 'https://www.mapquest.com/embed/my-maps/944eaf4c-3071-4533-881f-2bca302c0407?center=44.71746544499776,-110.42633056640625&zoom=9&maptype=map');