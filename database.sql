-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "groceryList" (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    displayImage varchar(250),
    unit varchar(50) NOT NULL,
    quantity DECIMAL NOT NULL
)

INSERT INTO "groceryList" ("name", "displayImage", "unit", "quantity")
VALUES 
('Oranges', 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg', 'pounds', 14.75),
('Puff pastry', 'https://i5.walmartimages.com/seo/Pepperidge-Farm-Puff-Pastry-Frozen-Pastry-Dough-Sheets-2-Count-17-3-oz-Box_d7d14af3-c52c-4869-8834-6f1b4716f5c2.3774f5e2b1a56719d2ce9fb25a16a461.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 'sheets', 2),
('Mini Wheats', 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00038000318344/d7299e8b636fc7d4e40d9be742860dc0_large.png&width=512&type=webp&quality=90', 'family-sized box', 3),
('Tomato sauce', 'https://www.internationalminimarket.com/wp-content/uploads/2021/04/tomato-sauce-30346-30.png', 'cans', .25),
('Glow-in-the-Dark Pickles', '', 'jars', 2),
('Unicorn Meat', '', 'cans', 3),
('Invisible Cheese', '', 'wheels', 1),
('Self-Heating Soup', '', 'cans', 4),
('Moon-Dust Flavored Chips', '', 'bags', 5),
('Dehydrated Water', '', 'packets', 10),
('Chocolate-Covered Crickets', '', 'boxes', 6),
('Alien Ice Cream', '', 'tubs', 2),
('Time-Traveling Tea Leaves', '', 'packets', 3),
('Whispering Wheat Bread', '', 'loaves', 4);
