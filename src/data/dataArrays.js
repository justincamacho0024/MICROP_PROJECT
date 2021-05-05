export const categories = [
  {
    id: 0,
    name: 'Herbs',
    photo_url: 'https://www.thespruce.com/thmb/FgEseiSEtj5ng3ASyy4_sriFlN8=/3450x2300/filters:fill(auto,1)/grow-oregano-indoors-1902489-5-538aee8ebe614e428ae44ee75d224d89.jpg'
  },
  {
    id: 1,
    name: 'Fruit',
    photo_url:
    'https://cimg2.ibsrv.net/cimg/www.davesgarden.com/700x312_100-1/418/Plum-Tree-418418.png'
  },
  {
    id: 2,
    name: 'Flower',
    photo_url: 'https://th.bing.com/th/id/R85d2eb205ffaf87228037ee181f2a5b8?rik=bJY3tzzio8Qh3Q&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fDrCmYlg.jpg&ehk=vYNnl4bAyonMsRFATGLtEyw9QuHDFTSuM90ux5Al0Lc%3d&risl=&pid=ImgRaw'
  },
  {
    id: 3,
    name: 'Alliums',
    photo_url:
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/3/22/01/shutterstock_gunsan-gimbanjang_647022712_garlic.jpg.rend.hgtvcom.1280.853.suffix/1521751497410.jpeg'
  },
  {
    id: 4,
    name: 'Nightshades',
    photo_url:
    'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/eggplant.jpg'
  },
  {
    id: 5,
    name: 'Roots',
    photo_url:
    'https://diy.sndimg.com/content/dam/images/diy/fullset/2018/5/7/0/shutterstock_408744037_kviktor_carrot-tops.jpg.rend.hgtvcom.1280.853.suffix/1525706276995.jpeg'
  },
  {
    id: 6,
    name: 'Other Vegetables',
    photo_url:
    'https://edge.bonnieplants.com/www/tiny/uploads/20200810203951/BONNIE-PLANTS_corn-iStock-857670630-2400px.jpg'
  },
];

export const recipes = [
  {
    recipeId: 1,
    categoryId: 2,
    title: 'Sunflower',
    photo_url:
      'https://www.almanac.com/sites/default/files/image_nodes/sunflower-1627193_1920.jpg',
    photosArray: [
      'https://www.almanac.com/sites/default/files/image_nodes/sunflower-1627193_1920.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2018/12/sunflowers.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/yellow-sunflower-field.jpg',
      'https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/10/14/0/dsc-6200-4ce30f6c0000.JPG.rend.hgtvcom.616.411.suffix/1452842838041.jpeg'
    ],
    time: '70-90 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
    ],
    description: 'Sunflowers have big, daisy-like flowers with bright yellow petals and brown centers that ripen into heavy heads filled with seeds.'
  },
  {
    recipeId: 2,
    categoryId: 1,
    title: 'Strawberries',
    photo_url: 'https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg',
    photosArray: [
      'https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/strawberries.jpg',
      'https://wiki.nurserylive.com/uploads/default/original/1X/5d4fca7fec9be8618e016588350d62ad547a1691.png',
      'https://previews.123rf.com/images/pstedrak/pstedrak2001/pstedrak200100086/138736508-strawberry-plant-with-freshly-picked-ripe-strawberries-in-punnet.jpg'
    ],
    time: '1 year',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerant'],
    ],
    description:
      'June bearing or spring bearing, everbearing and day neutral are the three main types of strawberries. Fruits of day neutral plants and everbearers are usually smaller than June-bearers fruit. June bearing strawberries produce a crop during a two-to-three week period in the spring. June-bearers produce flowers, fruits and runners. Everbearing strawberries produce three periods of flowers and fruit during the spring, summer and fall. Everbearers do not produce many runners. Day neutral strawberries will produce fruit throughout the growing season. These strawberries produce just a few runners. Everbearing and day neutral strawberries are great for gardeners who have limited space. They can be grown in terraced beds, barrels or pyramids. They can also be used as an edging plant or a groundcover.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Garlic',
    photo_url:
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/3/22/01/shutterstock_gunsan-gimbanjang_647022712_garlic.jpg.rend.hgtvcom.1280.853.suffix/1521751497410.jpeg',
    photosArray: [
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/3/22/01/shutterstock_gunsan-gimbanjang_647022712_garlic.jpg.rend.hgtvcom.1280.853.suffix/1521751497410.jpeg',
      'https://gardenerspath.com/wp-content/uploads/2020/03/Garlic-With-Scapes-Still-Attached.jpg',
      'https://horticulture.co.uk/wp-content/uploads/2019/10/garlic-header-1600x1063.jpg',
      'https://www.almanac.com/sites/default/files/image_nodes/garlic-growing-guide.jpg'
    ],
    time: '90 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '4/Square'],
      [3, 'Grow well during cool weather'],
      [6, 'Tolerant'],
      [8, 'Depth 2 in.'],
    ],
    description: 'Garlic is easy to grow and produces numerous bulbs after a long growing season. It is frost tolerant. Beyond its intense flavor and culinary uses, “the stinking rose” is good in the garden as an insect repellent and has been used for centuries as a home remedy.'
  },
  {
    recipeId: 4,
    categoryId: 0,
    title: 'Mint',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2012/04/peppermint-1.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2012/04/peppermint-1.jpg',
      'https://www.thespruce.com/thmb/3fRT6J106wVIyofZgE9zm5gNz0o=/2044x1533/smart/filters:no_upscale()/chocolate-mint-plant-4176684-13-f6d4fa0fb592451f8c0b1d139141631e.jpg',
      'https://www.almanac.com/sites/default/files/image_nodes/mint-planting-growing-harvesting.jpg',
      'https://gardenerspath.com/wp-content/uploads/2020/04/Mint-Growing-Vigorously-in-the-Garden.jpg'

    ],
    time: '60-90 days',
    ingredients: [
      [9, 'Grows best with full-part sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Mint is a perennial with very fragrant, toothed leaves and tiny purple, pink, or white flowers. It has a fruity, aromatic taste. There are many varieties of mint—all fragrant, whether shiny or fuzzy, smooth or crinkled, bright green or variegated. However, you can always tell a member of the mint family by its square stem. Rolling it between your fingers, you’ll notice a pungent scent and think of candy, sweet teas, or maybe even mint juleps.'
  },
  {
    recipeId: 5,
    categoryId: 2,
    title: 'Marigold',
    photo_url:
      'https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg',
    photosArray: [
      'https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/orange-french-marigolds.jpg',
      'https://diy.sndimg.com/content/dam/images/diy/fullset/2017/6/28/0/CI_Ball-Horticultural-Co_Marigold-flower.jpg.rend.hgtvcom.1280.960.suffix/1498658164122.jpeg',
      'https://diy.sndimg.com/content/dam/images/diy/fullset/2017/6/28/0/CI_Ball-Horticultural-Co_Marigold-flower.jpg.rend.hgtvcom.1280.960.suffix/1498658164122.jpeg'

    ],
    time: '40-50 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
    ],
    description: 'Bright orange flowers add a splash of color to your garden. But, those lovely marigold flowers can also provide a natural pest deterrent as well as strength to other plants.'
  },
  {
    recipeId: 6,
    categoryId: 3,
    title: 'Onions',
    photo_url:
      'https://edge.bonnieplants.com/www/tiny/uploads/20200810204214/BONNIE_onions_iStock-892022394-1800px.jpg',
    photosArray: [
      'https://edge.bonnieplants.com/www/tiny/uploads/20200810204214/BONNIE_onions_iStock-892022394-1800px.jpg',
      'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/onions.jpg?itok=LuSZeb0j',
      'https://cdn.harvesttotable.com/htt/2011/05/23190950/Onion-Row1.jpg',
      'https://cdn.harvesttotable.com/htt/2011/05/23190950/Onion-Row1.jpg'

    ],
    time: '90-120 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during cool weather'],
      [6, 'Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Onions are a cold-season crop, easy to grow because of their hardiness. We recommend using onion sets, which can be planted without worry of frost damage and have a higher success rate than direct seed or transplants. Onions grow well on raised beds or raised rows at least 4 inches high.'
  },
  {
    recipeId: 7,
    categoryId: 1,
    title: 'Blackberries',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/blackberries1.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/blackberries1.jpg',
      'https://diy.sndimg.com/content/dam/images/diy/fullset/2006/3/27/0/dffo102_3fe.jpg.rend.hgtvcom.616.462.suffix/1420686291505.jpeg',
      'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/blackberries-dish.jpg?itok=nRc8flxa',
      'https://www.starkbros.com/blog/wp-content/uploads/2014/03/6-pack-Blackberry-Plants.jpg'

    ],
    time: '1-2 years',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [12, '2 Squares'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
    ],
    description: 'Blackberries are very easy to grow, like raspberries. Blackberries come in several varieties, namely erect and trailing. Erect blackberries are bushes that support themselves and trailing blackberries must be trellised for support. All blackberries grow perennially and will come back year after year.'
  },
  {
    recipeId: 8,
    categoryId: 1,
    title: 'Raspberries',
    photo_url:
      'https://gardenerspath.com/wp-content/uploads/2018/05/Enjoy-Homegrown-Raspberries-for-Decades-to-Come.jpg',
    photosArray: [
      'https://gardenerspath.com/wp-content/uploads/2018/05/Enjoy-Homegrown-Raspberries-for-Decades-to-Come.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/raspberry.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2016/07/raspberry-contianer.jpg',
      'https://gardenerspath.com/wp-content/uploads/2018/05/Enjoy-Homegrown-Raspberries-for-Decades-to-Come.jpg'

    ],
    time: '2 years',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
    ],
    description: 'Raspberries are among the most delicious, easy-to-grow, and delicate berries. Raspberries can grow in a large variety of planting zones. Summer-bearing raspeberries grow one crop per season (in the summer) whereas ever-bearers grow two crops (one in summer, one in fall).'
  },
  {
    recipeId: 9,
    categoryId: 0,
    title: 'Oregano',
    photo_url:
      'https://www.thespruce.com/thmb/FgEseiSEtj5ng3ASyy4_sriFlN8=/3450x2300/filters:fill(auto,1)/grow-oregano-indoors-1902489-5-538aee8ebe614e428ae44ee75d224d89.jpg',
    photosArray: [
      'https://www.thespruce.com/thmb/FgEseiSEtj5ng3ASyy4_sriFlN8=/3450x2300/filters:fill(auto,1)/grow-oregano-indoors-1902489-5-538aee8ebe614e428ae44ee75d224d89.jpg',
      'https://www.thespruce.com/thmb/mutVJaumMMpGZsyt3KP0R4OpkvU=/3067x2300/smart/filters:no_upscale()/growing-oregano-plants-1402818-11-ce2a0899a12e4767a5ec71340464f508.jpg',
      'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/main_040417_MJB_IMG_4571_718x404.jpg?itok=xlqNYWYs',
      'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/main_040417_MJB_IMG_4571_718x404.jpg?itok=xlqNYWYs'

    ],
    time: '45-55 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Oregano is a perennial with rose-purple or white flowers and a taste reminiscent of thyme. Its taste is zesty and strong and is commonly used in Italian dishes. Oregano is a hardy plant and makes a good ground cover.'
  },
  {
    recipeId: 10,
    categoryId: 0,
    title: 'Basil',
    photo_url:
      'https://www.almanac.com/sites/default/files/image_nodes/basil-leaves-herb.jpg',
    photosArray: [
      'https://www.thespruce.com/thmb/b87rQuqMqCgdzKgELgw9nX8E01s=/3030x2021/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-basil-plants-1402624-07-6071d2544ef2423a99d2e30a153c2b00.jpg',
      'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MTg5MTMzNzM0ODgwNzY0/how-to-care-for-sweet-basil-plant.jpg',
      'data:image/jpeg;base64,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',
      'https://www.farmersalmanac.com/wp-content/uploads/2020/11/basil-plant-garden-as_245197176.jpeg'

    ],
    time: '20-30 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
      [10, 'Depth 1/4 in.'],

    ],
    description: 'Basil is a leafy, fragrant annual with a bushy appearance. The most common type of basil is sweet basil; other types include purple basil (less sweet than common basil), Lemon basil (lemon flavor), and Thai basil (licorice flavor). Basil is easy to grow and works well in Italian dishes, but it only grows in the summer, so plan accordingly.'
  },
  {
    recipeId: 11,
    categoryId: 0,
    title: 'Parsley',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2013/03/italian-flatleaf-parsley.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2013/03/italian-flatleaf-parsley.jpg',
      'https://www.kidsdogardening.com/wp-content/uploads/2020/02/Parsley-in-pot-696x465.jpeg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2016/07/raspberry-contianer.jpg',
      'https://www.guide-to-houseplants.com/images/parsley-potted-kitchen.jpg'

    ],
    time: '70-90 days',
    ingredients: [
      [9, 'Grows best with full-part sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during cool weather'],
      [6, 'Tolerates hard frost'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Parsley is a biennial plant with bright green, featherlike leaves and is in the same family as dill. This herb is used in soups, sauces, and salads, and it lessens the need for salt in soups. Not only is it the perfect garnish, but also it is healthy; it’s rich in iron and vitamins A and C.'
  },
  {
    recipeId: 12,
    categoryId: 5,
    title: 'Beets',
    photo_url:
      'https://www.almanac.com/sites/default/files/image_nodes/beets_by_darasp_kran_ss_crop.jpg',
    photosArray: [
      'https://www.almanac.com/sites/default/files/image_nodes/beets_by_darasp_kran_ss_crop.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2016/02/beet-plant-height.jpg',
      'https://cdn.harvesttotable.com/htt/2009/02/23181526/canstockphoto11775311-1024x683.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2015/02/beet-soil.jpg'

    ],
    time: '50-90 days',
    ingredients: [
      [9, 'Grows best with full-part sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during cool weather'],
      [13, 'Semi-Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Beets are a cool season vegetable crop. This root veggie grows quickly and has many different varieties which showcase deep red, yellow or white bulbs of different shapes. They can survive frost and almost freezing temperatures, which makes them a good choice for northern gardeners and an excellent long-season crop.'
  },
  {
    recipeId: 13,
    categoryId: 2,
    title: 'Chamonile',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/field-of-camomiles-blooming.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/field-of-camomiles-blooming.jpg',
      'https://edge.bonnieplants.com/www/tiny/uploads/20200810203631/shutterstock_1521861287.jpg',
      'http://images.ctfassets.net/3s5io6mnxfqz/3uy08cm6SQrhhj15USfdOQ/35bf59ebe8198c25b550ef46029df5e7/AdobeStock_316348174.jpeg',
      'https://i.pinimg.com/originals/03/7d/e4/037de4a3a05b1e537ade25f05cd2c8fe.jpg'
    ],
    time: '40-50 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
    ],
    description: 'German chamomile is grown for brewing tea or used in fragrances. Unlike Roman chamomile, it is an annual crop, although it usually self-seeds. It is easy to grow and can sometimes become invasive.'
  },
  {
    recipeId: 14,
    categoryId: 2,
    title: 'Nasturtium',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2011/05/nasturtiums1.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2011/05/nasturtiums1.jpg',
      'https://i.ytimg.com/vi/EpA0nCVBGqg/maxresdefault.jpg',
      'https://gardenerspath.com/wp-content/uploads/2017/07/How-to-Grow-Nasturtiums.jpg',
      'https://gardenerspath.com/wp-content/uploads/2017/07/How-to-Grow-Nasturtiums.jpg'

    ],
    time: '70-90 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
    ],
    description: 'In addition to looking nice, Nasturtium is also edible! Both the leaves and the flower are edible.'
  },
  {
    recipeId: 15,
    categoryId: 1,
    title: 'Blueberry',
    photo_url:
      'https://www.kellogggarden.com/wp-content/uploads/2020/03/blueberries-on-a-shrub.jpg',
    photosArray: [
      'https://www.arborday.org/trees/images/figure-blueberry.jpg',
      'https://assets.epicurious.com/photos/5797b5f920ada1484ddf2fe5/master/pass/draper-blueberries-072616.jpg',
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/1/29/0/CI_Bushel_And_Berry-Perpetua-Blueberries.JPG.rend.hgtvcom.1280.853.suffix/1517243191553.jpeg',
      'https://www.lawnstarter.com/blog/wp-content/uploads/2019/12/blueberry-1062712_1920-pixnio.jpg'

    ],
    time: '2-3 years',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during cool weather'],
      [6, 'Tolerates hard frost'],
    ],
    description: 'Blueberries grow on long-lived shrubs and are related to azaleas and rhododendrons. When properly cared for, a bush can provide fruit for decades.'
  },
  {
    recipeId: 16,
    categoryId: 0,
    title: 'Mustard',
    photo_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Mustard_plant_flower.jpg/1200px-Mustard_plant_flower.jpg',
    photosArray: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Mustard_plant_flower.jpg/1200px-Mustard_plant_flower.jpg',
      'https://images.wagwalkingweb.com/media/articles/horse/mustard-plants-poisoning/mustard-plants-poisoning.jpg',
      'http://www.maximumyield.com/images/uploads/blossom-daffodil-flora-flower-plant-mimosa-countryside-farm-nature-out.jpg',
      'http://www.maximumyield.com/images/uploads/blossom-daffodil-flora-flower-plant-mimosa-countryside-farm-nature-out.jpg'

    ],
    time: '35-45 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [14, '16/Square'],
      [3, 'Grow well during cool weather'],
      [13, 'Semi-Tolerant'],
      [15, 'Depth 1/2 in.'],
    ],
    description: 'Mustard is easy to grow and produces seed in as few as 60 days. The greens are edible and the flowers are attractive. If the seeds are allowed to mature on the plant, they will self-sow.'
  },
  {
    recipeId: 17,
    categoryId: 0,
    title: 'Thyme',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/potted-thyme-plant.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/potted-thyme-plant.jpg',
      'https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/thyme-planting-growing.jpg?itok=gm9MBy2a',
      'https://www.thespruce.com/thmb/zh388yLY6vDqIHuaXBwDoYM4uKg=/2665x1777/filters:fill(auto,1)/grow-thyme-indoors-1902495-02-6cfdad3b59e14b4187b348453f280a82.jpg',
      'https://cdn.harvesttotable.com/htt/2009/04/23182514/Thyme-plant-2.jpg'

    ],
    time: '60-90 days',
    ingredients: [
      [0, 'Sunflower grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
    ],
    description: 'Thyme is a small perennial shrub with lots of branches and light purple to pink flowers. Its aromatic and has a pleasant, pungent, clover flavor. There are over fifty varieties used in cooking and gardening. English thyme is used most often in cooking.'
  },
  {
    recipeId: 18,
    categoryId: 4,
    title: 'Eggplant',
    photo_url:
      'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/eggplant.jpg',
    photosArray: [
      'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/eggplant.jpg',
      'https://piedmontmastergardeners.org/wp-content/uploads/2019/07/eggplant-10-637x320.jpg',
      'https://cdn.harvesttotable.com/htt/2009/03/23181244/Eggplant-canstockphoto21594215.jpg',
      'https://tuigarden.co.nz//media/3209/eggplant.png'

    ],
    time: '75-90 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Eggplants are short-lived perennial vegetables, but are usually cultivated as annuals. Also known as aubergines, eggplants differ mainly in size, shape and color of the fruits. Eggplants are tropical and subtropical, requiring relatively high temperatures. Related crop include tomatoes, potatoes and peppers.'
  },
  {
    recipeId: 19,
    categoryId: 4,
    title: 'Okra',
    photo_url:
      'https://gardenerspath.com/wp-content/uploads/2019/04/Favorite-Okra-Varieties.jpg',
    photosArray: [
      'https://gardenerspath.com/wp-content/uploads/2019/04/Favorite-Okra-Varieties.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/articles/2018/02/growingokra-1000-1519306309.jpg?crop=1xw:0.786xh;center,top&resize=1200:*',
      'https://www.aces.edu/wp-content/uploads/2018/10/shutterstock_752656453.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hong_Kong_Okra_Aug_25_2012.JPG/1200px-Hong_Kong_Okra_Aug_25_2012.JPG'

    ],
    time: '50-65 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
      [15, 'Depth 1/2 in.'],
    ],
    description: 'Okra is traditionally a southern U.S. plant that thrives in warm weather. It is easy to grow and use and looks great throughout the growing season due to its beautiful flowers. Okra is also rich in vitamin A and low in calories.'
  },
  {
    recipeId: 20,
    categoryId: 5,
    title: 'Carrots',
    photo_url:
      'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/carrots-table_popidar-ss.jpg?itok=lh-pzqm3',
    photosArray: [
      'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/carrots-table_popidar-ss.jpg?itok=lh-pzqm3',
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/02/carrots.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/articles/2017/08/carrotgrowingguide-1000-1504182935.jpg',
      'https://cdn.harvesttotable.com/htt/2009/02/23181447/bigstock-176253796-scaled.jpg'

    ],
    time: '70-80 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [14, '16/Square'],
      [3, 'Grow well during cool weather'],
      [13, 'Semi-Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Carrots are a popular root vegetable that are easy to grow in sandy soil. They are resistant to most pests and diseases, and are a good late season crop that can tolerate frost. Not all carrots are orange; varieties vary in color from purple to white.'
  },
  {
    recipeId: 21,
    categoryId: 5,
    title: 'Potatoes',
    photo_url:
      'https://cdn.harvesttotable.com/htt/2009/01/23181312/canstockphoto18445615-1024x768.jpg',
    photosArray: [
      'https://cdn.harvesttotable.com/htt/2009/01/23181312/canstockphoto18445615-1024x768.jpg',
      'https://www.growlikegrandad.co.uk/wp-content/uploads/2019/07/flowers-on.jpg',
      'https://i.pinimg.com/originals/56/a5/c3/56a5c3aa261f1d0fd751c048b2599dec.jpg',
      'https://plantinstructions.com/wp-content/uploads/2017/07/potato-plant-1024x1012.jpg'

    ],
    time: '90-120 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during cool weather'],
      [13, 'Semi-Tolerant'],
      [8, 'Depth 2 in.'],
    ],
    description: 'This half hardy vegetable is a culinary staple, and yet is overlooked by many backyard gardeners. The taste and texture of home-grown potatoes are far superior to store bought, especially the early varieties. They need a cool climate, and also need to be watched to prevent sunburn. Potatoes can be grown as a winter crop in warmer climate zones.'
  },
  {
    recipeId: 22,
    categoryId: 5,
    title: 'Sweet Potatoes',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/02/sweet-potatoes.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2020/02/sweet-potatoes.jpg',
      'https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/sweet-potatoes-tubers_full_width.jpg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/sweet-potatoes.jpg',
      'https://gardenerspath.com/wp-content/uploads/2018/06/Sweet-Potatoes.jpg'

    ],
    time: '100-125 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during cool weather'],
      [13, 'Semi-Tolerant'],
      [8, 'Depth 2 in.'],
    ],
    description: 'The sweet potato is a warm-season, spreading vegetable of tropical origin. It is a good choice for a garden because it is easy to grow, is drought- / heat-tolerant, and has few pests or diseases. The sweet potato is also very nutritious and low in calories.'
  },
  {
    recipeId: 23,
    categoryId: 5,
    title: 'Radishes',
    photo_url:
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/radish.jpg',
    photosArray: [
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/radish.jpg',
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/12/19/0/CI_Terra_Organics_National_Garden_Bureau-Radish-Rudolf.jpg.rend.hgtvcom.1280.1280.suffix/1513688846119.jpeg',
      'https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/radish-pile_full_width.jpg',
      'https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/radish-pile_full_width.jpg'

    ],
    time: '25-40 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [14, '16/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
      [16, 'Depth 6 in.'],
    ],
    description: 'Radishes are a hardy, cool-season vegetable that can produce many crops each season due to its rapid days to maturity. Radishes can be planted in both the spring and the fall, but growing should be suspended in the warmer months. They are a very easy vegetable to grow.'
  },
  {
    recipeId: 24,
    categoryId: 5,
    title: 'Turnips',
    photo_url:
      'https://cdn.harvesttotable.com/htt/2009/02/23180945/canstockphoto31320963-1024x683.jpg',
    photosArray: [
      'https://cdn.harvesttotable.com/htt/2009/02/23180945/canstockphoto31320963-1024x683.jpg',
      'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/turnips_shutterstock_733782379.jpg?itok=Pj1l3peD',
      'hhttps://diy.sndimg.com/content/dam/images/diy/fullset/2018/5/7/0/shutterstock_1016064307_Elena-Koromyslova_turnips.jpg.rend.hgtvcom.1280.960.suffix/1525713330645.jpeg',
      'https://sites.google.com/site/knowyourvegetables/_/rsrc/1284624669649/know-your-turnips/how-to-grow-turnips/Turnip%20growing%2005.jpg?height=389&width=400'

    ],
    time: '45-70 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during cool weather'],
      [6, 'Tolerates hard frost'],

    ],
    description: 'Turnips are biennials usually grown as annuals. Although turnips are more of a staple in European kitchens, many southern gardeners like to grow them for their greens. Turnips take up to two months to mature. Turnips grow best in a temperate climate but can endure light frost. Fall crops are usually sweeter and more tender than spring crops—and pests are less of a problem.'
  },
  {
    recipeId: 25,
    categoryId: 5,
    title: 'Horseradish',
    photo_url:
      'https://www.thespruce.com/thmb/R8RMzJr7Q7XrOafiDAEkNxr6hvA=/1885x1414/smart/filters:no_upscale()/HorseradishPlant-GettyImages-856338992-487324da65f645bdb4a545c1189c13e1.jpg',
    photosArray: [
      'https://www.thespruce.com/thmb/R8RMzJr7Q7XrOafiDAEkNxr6hvA=/1885x1414/smart/filters:no_upscale()/HorseradishPlant-GettyImages-856338992-487324da65f645bdb4a545c1189c13e1.jpg',
      'data:image/jpeg;base64,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',
      'https://morningchores.com/wp-content/uploads/2018/06/Growing-Horseradish-How-to-Plant-Grow-and-Harvest-Horseradish-FB.jpg',
      'https://www.iamcountryside.com/wp-content/uploads/2019/02/growing-horseradish.jpg'

    ],
    time: '120 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [14, '16/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
      [16, 'Depth 6 in.'],
    ],
    description: 'Horseradish primarily grown for its flavorful and pungent roots. The leaves can also be eaten when they are young and tender.  Horseradish is grown from root divisions and can spread quickly. For that reason, many gardeners grow it within barriers or in a container.  Horseradish is normally planted in spring from root segments or sometimes potted nursery plants. It will quickly grow and be ready to harvest by fall.'
  },
  {
    recipeId: 26,
    categoryId: 6,
    title: 'Corn',
    photo_url:
      'https://edge.bonnieplants.com/www/tiny/uploads/20200810203951/BONNIE-PLANTS_corn-iStock-857670630-2400px.jpg',
    photosArray: [
      'https://edge.bonnieplants.com/www/tiny/uploads/20200810203951/BONNIE-PLANTS_corn-iStock-857670630-2400px.jpg',
      'https://www.aces.edu/wp-content/uploads/2019/07/IMG_4464.jpg',
      'https://cdn.harvesttotable.com/htt/2009/03/23181419/canstockphoto13707778-1024x683.jpg',
      'https://cdn.harvesttotable.com/htt/2009/03/23181419/canstockphoto13707778-1024x683.jpg'

    ],
    time: '70-105 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
    ],
    description: 'Sweet corn is an annual with yellow, white, and bi-colored ears. A long, frost-free growing season is necessary after planting. Sweet corn is wind-pollinated, so it should be planted in blocks, rather than in single rows. Early, mid, and late-season varieties extend the harvest. If you miss the optimal harvest time, corn will go downhill fast as sugars convert to starch.'
  },
  {
    recipeId: 27,
    categoryId: 6,
    title: 'Celery',
    photo_url:
      'https://cf.ltkcdn.net/garden/images/orig/257182-1607x1169-celery_garden.jpg',
    photosArray: [
      'https://cf.ltkcdn.net/garden/images/orig/257182-1607x1169-celery_garden.jpg',
      'http://images.ctfassets.net/3s5io6mnxfqz/2WJ9a10P27IeETZ2a11l0A/d4779f256fa2dd6d179de67077dbc0b5/AdobeStock_298730847.jpeg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/growingcelery-main-1514910811.jpg',
      'https://gardenerspath.com/wp-content/uploads/2019/11/Celery-Plants-Growing.jpg'

    ],
    time: '100-130 days',
    ingredients: [
      [9, 'Grows best with full-part sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during cool weather'],
      [13, 'Semi-Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Celery is a long-season crop that can be tricky to grow, some might say, the trickiest of all. It likes fertile soil, cool temperatures, and constant moisture. It will not tolerate heat and can be hard to transplant. Summer crops in the north and winter crops in the south make celery a year-round producer. All the work is worth it when you harvest crunchy, green stalks.'
  },
  {
    recipeId: 28,
    categoryId: 0,
    title: 'Ginger',
    photo_url:
      'https://gardenerspath.com/wp-content/uploads/2016/02/How-to-Grow-Ginger-FB.jpg',
    photosArray: [
      'https://gardenerspath.com/wp-content/uploads/2016/02/How-to-Grow-Ginger-FB.jpg',
      'https://lh3.googleusercontent.com/proxy/oA_2bqUaRr_ZtYWYgVhGPDjWnHd1odcymEaztyjt5vCOENkBxBfVMMBqe6uaxi2RDwUePrvwQXGVI1XDM7oI7Bwksb8eNnq4mbDfbiUqkzEpXyzC2DFsqAGjyARZeZdL',
      'https://www.gardeningknowhow.com/wp-content/uploads/2017/08/outdoor-ginger.jpg',
      'https://www.lovethegarden.com/sites/default/files/content/articles/UK_fresh-ginger-harvested.jpg'

    ],
    time: '10-12 months',
    ingredients: [
      [17, 'Grows best with shade'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Ginger plants spread and emerge from rhizomes, which is the part of the plant that is typically eaten. The leaves are usually lance-shaped or oblong, deep green, and glossy and in tropical climates ginger will flower. Ginger grows perennially in tropical climates (zones 9 and up). In colder regions, it must be grown annually.'
  },
  {
    recipeId: 29,
    categoryId: 4,
    title: 'Tomatoes',
    photo_url:
      'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg',
    photosArray: [
      'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg',
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/2/28/shutterstock-tomato-plant-591110411.jpg.rend.hgtvcom.1280.960.suffix/1519856109178.jpeg',
      'https://www.gardeningknowhow.com/wp-content/uploads/2009/04/cherry-tomatoes-1.jpg',
      'https://www.gardendesign.com/pictures/images/900x705Max/site_3/garden-gem-tomatoes-on-vine-lycopersicon-esculentum-proven-winners_15726.jpg'

    ],
    time: '70-90 days',
    ingredients: [
      [0, 'Grows best with full sun'],
      [1, 'Water deeply once per week'],
      [11, '4/Square'],
      [3, 'Grow well during warm weather'],
      [4, 'Not Tolerant'],
    ],
    description: 'Tomatoes are America’s favorite garden vegetable. (Yes, we technically eat the fruit of the tomato plant, but its used as a vegetable in eating and cooking and, thus, usually categorized in vegetables.) This vine plant is fairly easy to grow and will produce a bumper crop with proper care. Its uses are versatile, however, tomatoes are susceptible to a range of pests and diseases.'
  },
  {
    recipeId: 30,
    categoryId: 0,
    title: 'Sage',
    photo_url:
      'https://www.almanac.com/sites/default/files/users/The%20Editors/sage-leaves-plant_full_width.jpg',
    photosArray: [
      'https://www.almanac.com/sites/default/files/users/The%20Editors/sage-leaves-plant_full_width.jpg',
      'https://i.pinimg.com/originals/ba/18/17/ba18170785a7d62c418cb20ec2b74850.jpg',
      'https://edge.bonnieplants.com/www/tiny/uploads/20200810204153/BONNIE_sage_iStock-664890210-1800px.jpg',
      'https://cdn1.dotesports.com/wp-content/uploads/2020/04/03121142/Sage.jpg'

    ],
    time: '75 days',
    ingredients: [
      [0, 'Sunflower grows best with full sun'],
      [1, 'Water deeply once per week'],
      [2, '1/Square'],
      [5, 'Grow perennially and comeback year after year'],
      [6, 'Tolerates hard frost'],
      [10, 'Depth 1/4 in.'],
    ],
    description: 'Sage is a hardy perennial with soft, grayish green leaves. Its flower colors vary; they can be purple, pink, blue, or white. Common sage is used most commonly for cooking; its a classic in stuffing.'
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Sun - Full Sun',
    photo_url: 'https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png'
  },
  {
    ingredientId: 1,
    name: 'Water - 1 in/week',
    photo_url:
      'https://image.flaticon.com/icons/png/512/184/184981.png'
  },
  {
    ingredientId: 2,
    name: 'Spacing - 1/Square',
    photo_url: 'https://uploads-cdn.omnicalculator.com/images/plants-spacing-squares.png'
  },
  {
    ingredientId: 3,
    name: 'Season - Warm',
    photo_url:
      'https://i.imgur.com/Oh5ocMH.png'
  },
  {
    ingredientId: 4,
    name: 'Frost - Not tolerant',
    photo_url: 'https://cdn3.iconfinder.com/data/icons/winter-flat-8/32/Winter_season_cold_snow_snowflake_Christmas_frost-512.png'
  },
  {
    ingredientId: 5,
    name: 'Season - Perennial',
    photo_url: 'https://i.imgur.com/Oh5ocMH.png'
  },
  {
    ingredientId: 6,
    name: 'Frost - Tolerant',
    photo_url:
      'https://cdn3.iconfinder.com/data/icons/winter-flat-8/32/Winter_season_cold_snow_snowflake_Christmas_frost-512.png'
  },
  {
    ingredientId: 7,
    name: 'Season - Cool',
    photo_url:
      'https://i.imgur.com/Oh5ocMH.png'
  },
  {
    ingredientId: 8,
    name: 'Depth - 2 in.',
    photo_url:
      'https://i.imgur.com/zuVDxyO.png'
  },
  {
    ingredientId: 9,
    name: 'Sun - Full-Part Sun',
    photo_url: 'https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png'
  },
  {
    ingredientId: 10,
    name: 'Depth - 1/4 in.',
    photo_url: 'https://i.imgur.com/zuVDxyO.png'
  },
  {
    ingredientId: 11,
    name: 'Spacing - 4/Square',
    photo_url: 'https://uploads-cdn.omnicalculator.com/images/plants-spacing-squares.png'
  },
  {
    ingredientId: 12,
    name: 'Spacing - 2 Squares',
    photo_url: 'https://uploads-cdn.omnicalculator.com/images/plants-spacing-squares.png'
  },
  {
    ingredientId: 13,
    name: 'Frost - Semi-Tolerant',
    photo_url: 'https://cdn3.iconfinder.com/data/icons/winter-flat-8/32/Winter_season_cold_snow_snowflake_Christmas_frost-512.png'
  },
  {
    ingredientId: 14,
    name: 'Spacing - 16/Square',
    photo_url: 'https://uploads-cdn.omnicalculator.com/images/plants-spacing-squares.png'
  },
  {
    ingredientId: 15,
    name: 'Depth - 1/2 in.',
    photo_url: 'https://i.imgur.com/zuVDxyO.png'
  },
  {
    ingredientId: 16,
    name: 'Depth - 6 in.',
    photo_url: 'https://i.imgur.com/zuVDxyO.png'
  },
  {
    ingredientId: 17,
    name: 'Sun - Full Shade',
    photo_url: 'https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png'
  },
];
