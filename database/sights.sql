CREATE TABLE sights
(
    id SERIAL PRIMARY KEY,
    name text,
    days_open text,
    time_open NUMERIC(4),
    time_close numeric(4),
    summary text,
    location_id integer
);

INSERT INTO sights
    (name, days_open, time_open, time_close, summary, location_id)
VALUES
    ('Madison Campground', 'M, T, W, Th, F, Sa, Su', 0500, 2300,'Famous campground.', 1),
    ('Yogi Bear Cave', 'M, T, W, Th, F, Sa, Su', 0500, 2300,'Come explore the oldest bear cave on the park.', 1),
    ('Information Station Bookstore', 'M, T, W, Th, F, Sa', 0800, 1800,'Bookstore near Madison.', 1),
    ('Old Faithful', 'M, T, W, Th, F, Sa', 0800, 1800,'The most famous landmark at Yellowstone National Park', 2),
    ('Old Faithful Visitor Center', 'M, T, W, Th, F, Sa', 0800, 1800,'Vist us at the vistor center.', 2),
    ('Biscuit Basin', 'M, T, W, Th, F, Sa', 0800, 1800,'It is shaped like a biscuit!', 2),
    ('Black Sand Basin Basin', 'M, T, W, Th, F, Sa', 0800, 1800,'It may look like black sand but it is obsidian kids!', 2),
    ('Upper Geyser Basin', 'M, T, W, Th, F, Sa', 0800, 1800,'One of many gesyers surrounding old faithful.', 2),
    ('Midway Geyser Basin', 'M, T, W, Th, F, Sa', 0800, 1800,'One of many gesysers surrounding old faithful.', 2),
    ('Grant Village', 'M, T, W, Th, F, Sa', 0800, 1800,'Grant Village, a place to stay while you are away.', 3),
    ('The home of Grant himself', 'M, T, W, Th, F, Sa', 0800, 1800,'This is where Grant from Grant villiage was raised.', 3),
    ('Information Station Bookstore', 'M, T, W, Th, F, Sa', 0800, 1800,'Bookstore near Grant Villiage', 3),
    ('Lake Village', 'M, T, W, Th, F, Sa', 0800, 1800,'Lake Village, a place to stay while you are away, that is near a lake.', 4),
    ('Boats through time', 'M, T, W, Th, F, Sa', 0800, 1800,'A museum on water showcasing different boats from different eras of time.', 4),
    ('Pahaska Tepee', 'M, T, W, Th, F, Sa', 0800, 1800,'Experience the great outdoors in these tepees on Yellowstone National Park', 5),
    ('The home of Buffalo Bill', 'M, T, W, Th, F, Sa', 0800, 1800,'Experience the Wild West in this rustic home where Bill was raised.', 5),
    ('Canyon Village', 'M, T, W, Th, F, Sa, Su', 0500, 2100,'Canyon Village, a place to stay just moments away, from a big canyon.', 6),
    ('Little Canyon', 'M, T, W, Th, F, Sa, Su', 0500, 2100,'Explore how canyons can form small or large in a short amounts of time.', 6),
    ('Roaring Mountain', 'M, T, W, Th, F, Sa, Su', 0500, 2100,'Wear your earmuffs on this mountain.', 6),
    ('Steamboat Geyser', 'M, T, W, Th, F, Sa, Su', 0500, 2100,'It sounds like a steamboat.', 6),
    ('Tower Fall', 'M, T, W, Th, F, Sa', 0800, 1800,'The worlds most beautiful waterfall, according to our park rangers.', 7),
    ('Top of the Tower tours', 'M, T, W, Th, F, Sa', 0800, 1800,'Take a tour to the top of the tower on this terriffic tourist trip.', 7),
    ('Harry Yount office', 'M, T, W, Th, F, Sa', 0800, 1800,'One of the first park Rangers who did amazing work to preserve Yellowstone.', 8),
    ('Museum of the National Park Ranger', 'M, T, W, Th, F, Sa', 0800, 1800,'A fascinating Museum with fascinating stuff.', 8),
    ('Fishing Bridge', 'M, T, W, Th, F, Sa', 0800, 1800,'The famous fishing bridge.  Bring your gear and get fishing!', 8);