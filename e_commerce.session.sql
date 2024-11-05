CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL
);


INSERT INTO users (username, email, password, salt) VALUES
('minhkhang1505', 'mkhang@example.com', '22120151', 'salt_value_1');

INSERT INTO mobilephones(name, price, imageurl, detail) 
VALUES
(
    'iPhone 14 Pro Max',
    999,
    'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/06/05/my-project.png',
    $$
    iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.
    Key Features

    6.7-inch Super Retina XDR display1 featuring Always-On and ProMotion
    Dynamic Island, a magical new way to interact with iPhone
    48MP Main camera for up to 4x greater resolution
    nematic mode now in 4K Dolby Vision up to 30 fps
    Vital safety features—Emergency SOS via satellite2 and Crash Detection
    Action mode for smooth, steady, handheld videos
    All-day battery life and up to 29 hours of video playback3
    A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular4
    Industry-leading durability features with Ceramic Shield and water resistance5
    iOS 16 offers even more ways to personalize, communicate, and share6

    Legal

    The display has rounded corners. When measured as a rectangle, the screen is 6.69 inches diagonally. Actual viewable area is less.
    Emergency SOS via satellite is available in November 2022. Service is included for free for two years with the activation of any iPhone 14 model. Connection and response times vary based on location, site conditions, and other factors. See apple.com/iphone-14 or apple.com/iphone-14-pro for more information.
    Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/iphone/cellular.
    iPhone 14 Pro Max is splash, water, and dust resistant and was tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes). Splash, water, and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage not covered under warranty.
    Some features may not be available for all countries or all areas.
    $$
);

CREATE TABLE computers (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    imageurl VARCHAR(255) NOT NULL,
    detail TEXT NOT NULL
);

INSERT INTO computers(name, price, imageurl, detail)
VALUES
(
    'Macbook Air M2',
    899,
    'https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/09/macbook-air-13-in-m3-chip-starlight-pure-front-screen-usen.jpg',
    $$
    Apple Macbook Air M2 (2022) 13 inch 8-Core CPU/8-Core GPU 256GB SSD 8GB Ram Starlight
    STRIKINGLY THIN DESIGN - The redesigned MacBook Air is more portable than ever and weighs just 2.7 pounds. It?s the incredibly capable laptop that lets you work, play or create just about anything - anywhere.
    SUPERCHARGED BY M2 - Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.
    UP TO 18 HOURS OF BATTERY LIFE - Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.
    BIG, BEAUTIFUL DISPLAY - The 13.6-inch Liquid Retina display features over 500 nits of brightness, P3 wide color and support for 1 billion colors for vibrant images and incredible detail.
    ADVANCED CAMERA AND AUDIO - Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio.
    $$
),
(
    'Macbook Pro 14 M2',
    1699,
    'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2023/02/28/mabookpro14-silver-1.png',
    $$
    Restored Apple Macbook Pro M2 Pro 12-Core CPU 19-Core GPU 14-inch 2023 Gray 1TB SSD 16GB Ram
    This product may not have been manufacturer certified but has been professionally inspected, tested and cleaned by Walmart Restored Program Sellers and Suppliers.
    Fully functional product in Like New Condition. Item may have very light micro-scratches, invisible at a distance of 8-12 inches (arm’s length).
    This product may include accessories which might not be original but will be compatible and fully functional.
    This product may be returned within 90 days for free return or replacement if you are not satisfied.
    Battery capacity exceeds 80% capacity relative to its new equivalent.
    $$
),
(
    'Macbook Pro 16 M2',
    1999,
    'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/11/05/macbook-pro-14-inch-m4-max-den-1.png',
    $$
    M2 Max brings power to take on even more demanding projects.
    Stunning 16-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio
    M2 Max chip for exceptional speed and power
    12-core CPU to fly through pro workflows quicker than ever
    38-core GPU for graphics-intensive apps and games
    64GB of unified memory makes everything you do fast and fluid
    Up to 18 hours of battery life
    8TB of superfast SSD storage launches apps and opens files in an instant
    1080p FaceTime HD camera
    Six-speaker sound system with force-cancelling woofers
    Studio-quality three-microphone array captures your voice more clearly
    Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe charging port
    Wi-Fi 6E wireless connectivity for up to 2x faster throughput
    Backlit Magic Keyboard with Touch ID for secure unlock and payments
    macOS Ventura gives you powerful new ways to get more done, share, and collaborate—across all your Apple devices

    In The Box
    -16-inch MacBook Pro
    -140W USB-C Power Adapter
    -USB-C to MagSafe 3 Cable (2 m)
    64 GB Memory
    Solid State Drive Capacity 8 TB
    Configure To Order (Factory Upgraded from Base Spec)
    $$
);

CREATE TABLE televisions (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL
);

