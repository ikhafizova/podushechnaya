export interface Dish {
  id: string;
  name: { ru: string; en: string; uz: string };
  description: { ru: string; en: string; uz: string };
  price: number;
  category: string;
  image: string;
  available: boolean;
  weight?: string;
}

export interface Category {
  id: string;
  label: { ru: string; en: string; uz: string };
  icon: string;
  dishes: Dish[];
}

export const categories: Category[] = [
  {
    id: "breakfast",
    label: { ru: "Утро начинается до 17:00", en: "Breakfast until 17:00", uz: "17:00 gacha nonushta" },
    icon: "😇",
    dishes: [
      {
        id: "b-01",
        name: { ru: "Омлет и его друзья с говядиной", en: "Omelette with Beef", uz: "Mol go'shti bilan omlet" },
        description: { ru: "Омлет, сыр камамбер, копчёная говядина, тост с сыром, соус Тар-Тар, шпинат с рукколой", en: "Omelette, camembert, smoked beef, cheese toast, Tar-Tar sauce, spinach with arugula", uz: "Omlet, kamember pishloq, dudlangan mol go'shti, pishloqli tost" },
        price: 82000, category: "breakfast", image: "/images/menu/b-01.jpg", available: true,
      },
      {
        id: "b-02",
        name: { ru: "Омлет и брускетты с форелью", en: "Omelette & Bruschetta with Trout", uz: "Forel bilan omlet va brusketty" },
        description: { ru: "Омлет 2 яйца, брускетты с пюре авокадо, слабосолёная форель, микс салат", en: "2-egg omelette, avocado bruschetta, lightly salted trout, mixed salad", uz: "2 tuxumli omlet, avokado brusketty, engil tuzlangan forel" },
        price: 100000, category: "breakfast", image: "/images/menu/b-02.jpg", available: true,
      },
      {
        id: "b-03",
        name: { ru: "Завтрак с курочкой и авокадо", en: "Chicken & Avocado Breakfast", uz: "Tovuq va avokado bilan nonushta" },
        description: { ru: "Куриное бёдрышко гриль, авокадо, тост бриошь, красная капуста, томатно-чесночный соус", en: "Grilled chicken thigh, avocado, brioche toast, red cabbage, tomato-garlic sauce", uz: "Grilda pishirilgan tovuq soni, avokado, briosh tost" },
        price: 94000, category: "breakfast", image: "/images/menu/b-03.jpg", available: true,
      },
      {
        id: "b-04",
        name: { ru: "Шакшука с копчёностями", en: "Shakshuka with Smoked Meats", uz: "Dudlangan go'sht bilan shakshuka" },
        description: { ru: "Индейка, говяжья ветчина и салями, томаты, перец, яйца, сметана, бородинский хлеб", en: "Turkey, beef ham and salami, tomatoes, pepper, eggs, sour cream, Borodino bread", uz: "Kurka, mol go'shti vetchinasi, tuxum, pomidor, kisliy qaymoq" },
        price: 82000, category: "breakfast", image: "/images/menu/b-04.jpg", available: true,
      },
      {
        id: "b-05",
        name: { ru: "Завтрак с драниками", en: "Breakfast with Potato Pancakes", uz: "Kartoshka draniki bilan nonushta" },
        description: { ru: "Драник из картофеля, сметана, слабосолёная форель, яйцо пашот, микс салат", en: "Potato pancake, sour cream, lightly salted trout, poached egg, mixed salad", uz: "Kartoshka draniqi, qaymoq, forel, poshyet tuxum" },
        price: 73000, category: "breakfast", image: "/images/menu/b-05.jpg", available: true,
      },
      {
        id: "b-06",
        name: { ru: "Сырники с ягодным соусом", en: "Cheese Pancakes with Berry Sauce", uz: "Mevali sous bilan tvorogli krep" },
        description: { ru: "", en: "", uz: "" },
        price: 70000, category: "breakfast", image: "/images/menu/b-06.jpg", available: true,
      },
      {
        id: "b-07",
        name: { ru: "Каша овсяная с сухофруктами", en: "Oatmeal with Dried Fruits", uz: "Quritilgan mevali jo'xori bo'tqasi" },
        description: { ru: "Молочная овсяная каша с кешью, изюмом и бананом", en: "Milk oatmeal with cashews, raisins and banana", uz: "Keshyu, mayiz va banan bilan sut bo'tqasi" },
        price: 40000, category: "breakfast", image: "/images/menu/b-07.jpg", available: true,
      },
      {
        id: "b-08",
        name: { ru: "Омлет с крем-чизом, шпинатом и томатами", en: "Omelette with Cream Cheese & Spinach", uz: "Krem-pishloq va ismaloq bilan omlet" },
        description: { ru: "Омлет 2 яйца, шпинат с медовым соусом, томаты, крем-чиз", en: "2-egg omelette, spinach with honey sauce, tomatoes, cream cheese", uz: "2 tuxumli omlet, asal sousi bilan ismaloq, pomidor, krem-pishloq" },
        price: 54000, category: "breakfast", image: "/images/menu/b-08.jpg", available: true,
      },
      {
        id: "b-09",
        name: { ru: "Завтрак с колбасками", en: "Sausage Breakfast", uz: "Kolbasa bilan nonushta" },
        description: { ru: "Куриные колбаски, глазунья, помидоры с грибами, шпинат с рукколой и брынзой, хлеб бриошь", en: "Chicken sausages, fried egg, tomatoes with mushrooms, spinach with arugula and feta, brioche", uz: "Tovuq kolbasasi, qovurilgan tuxum, qo'ziqorinli pomidor" },
        price: 82000, category: "breakfast", image: "/images/menu/b-09.jpg", available: true,
      },
      {
        id: "b-10",
        name: { ru: "Омлет и его друзья", en: "Omelette & Friends", uz: "Omlet va uning do'stlari" },
        description: { ru: "Омлет, камамбер, курочка, тост с сыром, соус Тар-Тар, шпинат с рукколой", en: "Omelette, camembert, chicken, cheese toast, Tar-Tar sauce, spinach", uz: "Omlet, kamember, tovuq, pishloqli tost" },
        price: 72000, category: "breakfast", image: "/images/menu/b-10.jpg", available: true,
      },
      {
        id: "b-11",
        name: { ru: "Блинчик с мясом (1 шт)", en: "Meat Crepe (1 pc)", uz: "Go'shtli blin (1 dona)" },
        description: { ru: "Блинчик с мясным фаршем", en: "Crepe with minced meat", uz: "Qiyma bilan blin" },
        price: 18000, category: "breakfast", image: "/images/menu/b-11.jpg", available: true,
      },
      {
        id: "b-12",
        name: { ru: "Блинчик (1 шт)", en: "Crepe (1 pc)", uz: "Blin (1 dona)" },
        description: { ru: "Классический блинчик", en: "Classic crepe", uz: "Klassik blin" },
        price: 8000, category: "breakfast", image: "/images/menu/b-12.jpg", available: true,
      },
      {
        id: "b-13",
        name: { ru: "Клубничное варенье", en: "Strawberry Jam", uz: "Qulupnay murabbo" },
        description: { ru: "", en: "", uz: "" },
        price: 18000, category: "breakfast", image: "/images/menu/b-13.jpg", available: true,
      },
      {
        id: "b-14",
        name: { ru: "Малиновое варенье", en: "Raspberry Jam", uz: "Maysalam murabbo" },
        description: { ru: "", en: "", uz: "" },
        price: 18000, category: "breakfast", image: "/images/menu/b-14.jpg", available: true,
      },
      {
        id: "b-15",
        name: { ru: "Айвовое варенье", en: "Quince Jam", uz: "Behi murabbo" },
        description: { ru: "", en: "", uz: "" },
        price: 18000, category: "breakfast", image: "/images/menu/b-15.jpg", available: true,
      },
      {
        id: "b-16",
        name: { ru: "Сэт Варенье", en: "Jam Set", uz: "Murabbo seti" },
        description: { ru: "", en: "", uz: "" },
        price: 60000, category: "breakfast", image: "/images/menu/b-16.jpg", available: true,
      },
    ],
  },
  {
    id: "snacks",
    label: { ru: "Быстро и вкусно", en: "Quick & Tasty", uz: "Tez va mazali" },
    icon: "🚀",
    dishes: [
      {
        id: "s-01",
        name: { ru: "Морковный перекус", en: "Carrot Snack", uz: "Sabzili gazak" },
        description: { ru: "Обжаренная морковь, базилик, грецкие орехи, чеснок, сырный соус", en: "Sautéed carrot, basil, walnuts, garlic, cheese sauce", uz: "Qovurilgan sabzi, rayhon, yong'oq, sarimsoq, pishloq sousi" },
        price: 41000, category: "snacks", image: "/images/menu/s-01.jpg", available: true,
      },
      {
        id: "s-02",
        name: { ru: "С томатами черри", en: "With Cherry Tomatoes", uz: "Gilos pomidor bilan" },
        description: { ru: "Бланшированные черри, кинза, мята, орегано, чеснок, оливковое масло, сырный соус", en: "Blanched cherry tomatoes, cilantro, mint, oregano, garlic, olive oil, cheese sauce", uz: "Blanşlangan gilos pomidori, zira, nane, oregano, zaytun moyi" },
        price: 41000, category: "snacks", image: "/images/menu/s-02.jpg", available: true,
      },
      {
        id: "s-03",
        name: { ru: "Сэндвич с форелью", en: "Trout Sandwich", uz: "Forel bilan sendvich" },
        description: { ru: "Бриошь, слабосолёная форель, соус цезарь, помидорки, огурчики, плавленый сыр, микс салат", en: "Brioche, lightly salted trout, Caesar sauce, tomatoes, cucumbers, melted cheese, mixed salad", uz: "Briosh, forel, sezar sousi, pomidor, bodring, eritilgan pishloq" },
        price: 75000, category: "snacks", image: "/images/menu/s-03.jpg", available: true,
      },
      {
        id: "s-04",
        name: { ru: "Сэндвич с курицей", en: "Chicken Sandwich", uz: "Tovuqli sendvich" },
        description: { ru: "Бриошь, курочка, соус цезарь, помидорки, огурчики, плавленый сыр, микс салат", en: "Brioche, chicken, Caesar sauce, tomatoes, cucumbers, melted cheese, mixed salad", uz: "Briosh, tovuq, sezar sousi, pomidor, bodring" },
        price: 64000, category: "snacks", image: "/images/menu/s-04.jpg", available: true,
      },
      {
        id: "s-05",
        name: { ru: "Сэндвич с мясом", en: "Beef Sandwich", uz: "Go'shtli sendvich" },
        description: { ru: "Бриошь, томлёная говядина, соус цезарь и барбекю, помидорки, огурчики, плавленый сыр", en: "Brioche, braised beef, Caesar and BBQ sauce, tomatoes, cucumbers, melted cheese", uz: "Briosh, qovurilgan mol go'shti, sezar va barbek sousi" },
        price: 64000, category: "snacks", image: "/images/menu/s-05.jpg", available: true,
      },
    ],
  },
  {
    id: "salads",
    label: { ru: "Свежий взгляд", en: "Salads", uz: "Salatlar" },
    icon: "🧐",
    dishes: [
      {
        id: "sal-01",
        name: { ru: "Греческий с соусом песто", en: "Greek Salad with Pesto", uz: "Pesto sousi bilan yunon salati" },
        description: { ru: "Соус песто, помидоры, огурцы, болгарский перец, маслины, оливки, Фетакса, микс салат", en: "Pesto sauce, tomatoes, cucumbers, bell pepper, black olives, Feta, mixed salad", uz: "Pesto sousi, pomidor, bodring, qalampir, zaytun, Fetaks pishloq" },
        price: 66000, category: "salads", image: "/images/menu/sal-01.jpg", available: true,
      },
      {
        id: "sal-02",
        name: { ru: "Курочка с горчичкой с мёдом", en: "Honey Mustard Chicken Salad", uz: "Asal-xantal sousi bilan tovuq salati" },
        description: { ru: "Куриное бёдрышко гриль, микс салат, медово-горчичный соус", en: "Grilled chicken thigh, mixed salad, honey-mustard dressing", uz: "Grilda tovuq soni, aralash salat, asal-xantal sousi" },
        price: 90000, category: "salads", image: "/images/menu/sal-02.jpg", available: true,
      },
      {
        id: "sal-03",
        name: { ru: "Цезарь с курочкой", en: "Chicken Caesar", uz: "Tovuqli Sezar" },
        description: { ru: "Айсберг, куриная грудка, перепелиные яйца, черри, соус цезарь, пармезан, сухарики", en: "Iceberg, chicken breast, quail eggs, cherry tomatoes, Caesar sauce, parmesan, croutons", uz: "Asberg, tovuq ko'kragi, bedana tuxumlari, gilos pomidori, sezar sousi, parmezan" },
        price: 71000, category: "salads", image: "/images/menu/sal-03.jpg", available: true,
      },
      {
        id: "sal-04",
        name: { ru: "Салат со свежим тунцом", en: "Fresh Tuna Salad", uz: "Yangi tunets bilan salat" },
        description: { ru: "Тунец в кунжуте на гриле, помидоры, огурцы, болгарский перец, лук шалот, кукуруза", en: "Sesame-crusted grilled tuna, tomatoes, cucumbers, bell pepper, shallots, corn", uz: "Grilda pishirilgan tunets, pomidor, bodring, qalampir, makkajo'xori" },
        price: 100000, category: "salads", image: "/images/menu/sal-04.jpg", available: true,
      },
      {
        id: "sal-05",
        name: { ru: "Салат с консервированным тунцом", en: "Canned Tuna Salad", uz: "Konservalangan tunets salati" },
        description: { ru: "Консервированный тунец, помидоры, огурцы, болгарский перец, лук шалот, кукуруза", en: "Canned tuna, tomatoes, cucumbers, bell pepper, shallots, corn", uz: "Konservalangan tunets, pomidor, bodring, qalampir, makkajo'xori" },
        price: 100000, category: "salads", image: "/images/menu/sal-05.jpg", available: true,
      },
      {
        id: "sal-06",
        name: { ru: "Хрустящие баклажаны", en: "Crispy Eggplant Salad", uz: "Qarsildoq baqlajon salati" },
        description: { ru: "Жареные баклажаны во фритюре, черри, кинза, чеснок, кешью, устричный соус", en: "Deep-fried eggplant, cherry tomatoes, cilantro, garlic, cashews, oyster sauce", uz: "Qovurilgan baqlajon, gilos pomidori, keshyu, ustritsa sousi" },
        price: 80000, category: "salads", image: "/images/menu/sal-06.jpg", available: true,
      },
      {
        id: "sal-07",
        name: { ru: "Говяжья вырезка с овощами", en: "Beef Tenderloin Salad", uz: "Sabzavotli mol go'shti salati" },
        description: { ru: "Обжаренная вырезка, микс салат с помидорами, огурцами, болгарским перцем, бальзамический крем", en: "Sautéed tenderloin, mixed salad with tomatoes, cucumbers, bell pepper, balsamic cream", uz: "Qovurilgan mol go'shti, aralash salat, balzamik krem" },
        price: 97000, category: "salads", image: "/images/menu/sal-07.jpg", available: true,
      },
      {
        id: "sal-08",
        name: { ru: "Крабово-клёвый салат", en: "Crab Salad", uz: "Qisqichbaqa salati" },
        description: { ru: "Крабовые палочки, огурец, авокадо, спайси соус, зелёный лук, унаги", en: "Crab sticks, cucumber, avocado, spicy sauce, green onion, unagi", uz: "Qisqichbaqa tayoqchalari, bodring, avokado, achchiq sous, unagi" },
        price: 92000, category: "salads", image: "/images/menu/sal-08.jpg", available: true,
      },
    ],
  },
  {
    id: "soups",
    label: { ru: "Тепло в ложке", en: "Soups", uz: "Sho'rvalar" },
    icon: "🤗",
    dishes: [
      {
        id: "sp-01",
        name: { ru: "Рамен", en: "Ramen", uz: "Ramen" },
        description: { ru: "Говядина, лапша рамэн, бульон 8 часов, пак чой, яйцо пашот, зелёный лук, кунжут", en: "Beef, ramen noodles, 8-hour broth, pak choi, poached egg, green onion, sesame", uz: "Mol go'shti, ramen lapshasi, 8 soatlik bulyon, poshyet tuxum, kunjut" },
        price: 91000, category: "soups", image: "/images/menu/sp-01.jpg", available: true,
      },
      {
        id: "sp-02",
        name: { ru: "Тыквенный суп", en: "Pumpkin Soup", uz: "Qovoq sho'rva" },
        description: { ru: "Крем-суп из тыквы, картофеля и сливочного масла, тыквенные семечки", en: "Cream soup of pumpkin, potato and butter, pumpkin seeds", uz: "Qovoq, kartoshka va sariyog'dan krem-sho'rva, qovoq urug'lari" },
        price: 46000, category: "soups", image: "/images/menu/sp-02.jpg", available: true,
      },
      {
        id: "sp-03",
        name: { ru: "Окрошка с курицей", en: "Chicken Okroshka", uz: "Tovuqli okroshka" },
        description: { ru: "Кефир, сливки, отварная курица, картофель, огурец, укроп, яйцо", en: "Kefir, cream, boiled chicken, potato, cucumber, dill, egg", uz: "Kefir, qaymoq, pishirilgan tovuq, kartoshka, bodring, ukrop, tuxum" },
        price: 37000, category: "soups", image: "/images/menu/sp-03.jpg", available: true,
      },
      {
        id: "sp-04",
        name: { ru: "Чечевичка", en: "Lentil Soup", uz: "Yasmiq sho'rva" },
        description: { ru: "Чечевичный крем-суп на курином бульоне, сухарики, лимон", en: "Lentil cream soup on chicken broth, croutons, lemon", uz: "Tovuq bulyon asosida yasmiq krem-sho'rva, krekerlar, limon" },
        price: 51000, category: "soups", image: "/images/menu/sp-04.jpg", available: true,
      },
      {
        id: "sp-05",
        name: { ru: "Куриный супчик с лапшой", en: "Chicken Noodle Soup", uz: "Lapshali tovuq sho'rva" },
        description: { ru: "Куриный бульон, лапша, перепелиное яйцо, морковь", en: "Chicken broth, noodles, quail egg, carrot", uz: "Tovuq bulyon, lapsha, bedana tuxumi, sabzi" },
        price: 46000, category: "soups", image: "/images/menu/sp-05.jpg", available: true,
      },
      {
        id: "sp-06",
        name: { ru: "Цветные пельмешки", en: "Colourful Dumplings in Broth", uz: "Rangli pelmenya bulyon bilan" },
        description: { ru: "Детские пельмени с бульоном", en: "Kids dumplings in broth", uz: "Bulyon bilan bolalar pelmenyasi" },
        price: 48000, category: "soups", image: "/images/menu/sp-06.jpg", available: true,
      },
    ],
  },
  {
    id: "mains",
    label: { ru: "Горяченькое", en: "Main Dishes", uz: "Issiq taomlar" },
    icon: "🥰",
    dishes: [
      {
        id: "m-01",
        name: { ru: "Томлёная говядина сувид с картофелем", en: "Sous Vide Beef with Potato", uz: "Sous-vide usulida mol go'shti" },
        description: { ru: "Говядина сувид, отварной картофель, топлёное масло, сыр, соус чимичури, микс салат", en: "Sous vide beef, boiled potato, clarified butter, cheese, chimichurri sauce, mixed salad", uz: "Sous-vide mol go'shti, kartoshka, sariyog', chimichurri sousi" },
        price: 126000, category: "mains", image: "/images/menu/m-01.jpg", available: true,
      },
      {
        id: "m-02",
        name: { ru: "Курочка с сыром и кукурузой", en: "Chicken with Cheese & Corn", uz: "Pishloq va makkajo'xori bilan tovuq" },
        description: { ru: "Куриная грудка, кукуруза, сырный соус, шпинат", en: "Chicken breast, corn, cheese sauce, spinach", uz: "Tovuq ko'kragi, makkajo'xori, pishloq sousi, ismaloq" },
        price: 87000, category: "mains", image: "/images/menu/m-02.jpg", available: true,
      },
      {
        id: "m-03",
        name: { ru: "Курочка с брокколи и пюре", en: "Chicken with Broccoli & Mash", uz: "Brokkoli va kartoshka püresi bilan tovuq" },
        description: { ru: "Куриная грудка, брокколи, картофельное пюре, чеснок, сливочно-грибной соус", en: "Chicken breast, broccoli, mashed potato, garlic, creamy mushroom sauce", uz: "Tovuq ko'kragi, brokkoli, kartoshka püresi, qo'ziqorin sousi" },
        price: 87000, category: "mains", image: "/images/menu/m-03.jpg", available: true,
      },
      {
        id: "m-04",
        name: { ru: "Филе миньон с перечным соусом", en: "Filet Mignon with Pepper Sauce", uz: "Qalampir sousi bilan filet minyon" },
        description: { ru: "", en: "", uz: "" },
        price: 162000, category: "mains", image: "/images/menu/m-04.jpg", available: true,
      },
      {
        id: "m-05",
        name: { ru: "ПП курочка с авокадо и рисом", en: "Healthy Chicken with Avocado & Rice", uz: "Avokado va guruch bilan sog'lom tovuq" },
        description: { ru: "Запечённая курочка, авокадо, томаты, болгарский перец, отварной рис, соус из греческого йогурта", en: "Baked chicken, avocado, tomatoes, bell pepper, rice, Greek yogurt sauce", uz: "Pishirilgan tovuq, avokado, pomidor, guruch, yunon qatiq sousi" },
        price: 92000, category: "mains", image: "/images/menu/m-05.jpg", available: true,
      },
      {
        id: "m-06",
        name: { ru: "Форель с киноа", en: "Trout with Quinoa", uz: "Kinoa bilan forel" },
        description: { ru: "Запечённая форель, брокколи, киноа, соус из греческого йогурта", en: "Baked trout, broccoli, quinoa, Greek yogurt sauce", uz: "Pishirilgan forel, brokkoli, kinoa, yunon qatiq sousi" },
        price: 87000, category: "mains", image: "/images/menu/m-06.jpg", available: true,
      },
      {
        id: "m-07",
        name: { ru: "«Ой, тут всем хватит»", en: "The Big Feast", uz: "«Hamma uchun yetadi»" },
        description: { ru: "Большое блюдо для компании", en: "Big sharing dish", uz: "Katta jamoa taomi" },
        price: 541000, category: "mains", image: "/images/menu/m-07.jpg", available: true,
      },
      {
        id: "m-08",
        name: { ru: "Три котлетки из курицы с пюрешкой", en: "3 Chicken Patties with Mash", uz: "Puree bilan 3 ta tovuq kotleti" },
        description: { ru: "3 куриные котлеты, картофельное пюре с огурчиками и помидорками", en: "3 chicken patties, mashed potato with cucumbers and tomatoes", uz: "3 ta tovuq kotleti, kartoshka püresi, bodring va pomidor bilan" },
        price: 83000, category: "mains", image: "/images/menu/m-08.jpg", available: true,
      },
      {
        id: "m-09",
        name: { ru: "Крылышки барбекю 0,5 кг", en: "BBQ Wings 0.5 kg", uz: "Barbek qanot 0,5 kg" },
        description: { ru: "Крылышки фритюр, соус BBQ, кунжут", en: "Deep-fried wings, BBQ sauce, sesame", uz: "Qovurilgan qanotlar, barbek sousi, kunjut" },
        price: 87000, category: "mains", image: "/images/menu/m-09.jpg", available: true, weight: "500 г",
      },
      {
        id: "m-10",
        name: { ru: "Форель с пюре и брокколи", en: "Trout with Mash & Broccoli", uz: "Puree va brokkoli bilan forel" },
        description: { ru: "Форель на гриле, брокколи, картофельное пюре, микс салат, лимон, соус терияки", en: "Grilled trout, broccoli, mashed potato, mixed salad, lemon, teriyaki sauce", uz: "Grilda forel, brokkoli, kartoshka püresi, limon, teriyaki sousi" },
        price: 164000, category: "mains", image: "/images/menu/m-10.jpg", available: true,
      },
      {
        id: "m-11",
        name: { ru: "Курочка с рисом и овощами", en: "Chicken Rice Wok", uz: "Guruch va sabzavot bilan tovuq wok" },
        description: { ru: "Курица, болгарский перец, яйцо, рис — стиль wok, соевый соус, унаги", en: "Chicken, bell pepper, egg, rice — wok style, soy sauce, unagi", uz: "Tovuq, qalampir, tuxum, guruch — wok uslubida, soya sousi" },
        price: 80000, category: "mains", image: "/images/menu/m-11.jpg", available: true,
      },
      {
        id: "m-12",
        name: { ru: "Курочка с картошкой по-домашнему", en: "Home-Style Chicken & Potato", uz: "Uy usulida tovuq va kartoshka" },
        description: { ru: "Картошка фри, жареная курочка с луком в сливочном соусе", en: "French fries, fried chicken with onion in cream sauce", uz: "Kartoshka fri, piyoz va qaymoq sousi bilan qovurilgan tovuq" },
        price: 87000, category: "mains", image: "/images/menu/m-12.jpg", available: true,
      },
      {
        id: "m-13",
        name: { ru: "Мясо с картошкой по-домашнему", en: "Home-Style Meat & Potato", uz: "Uy usulida go'sht va kartoshka" },
        description: { ru: "Картошка фри, жареное мясо с луком в сливочном соусе", en: "French fries, fried meat with onion in cream sauce", uz: "Kartoshka fri, piyoz va qaymoq sousi bilan qovurilgan go'sht" },
        price: 110000, category: "mains", image: "/images/menu/m-13.jpg", available: true,
      },
      {
        id: "m-14",
        name: { ru: "Медальоны из телятины", en: "Veal Medallions", uz: "Buzoq go'shti medalyonlari" },
        description: { ru: "3 медальона из телятины, сезонные овощи гриль, соус терияки", en: "3 veal medallions, seasonal grilled vegetables, teriyaki sauce", uz: "3 ta buzoq medalyoni, grilda mavsum sabzavotlari, teriyaki sousi" },
        price: 164000, category: "mains", image: "/images/menu/m-14.jpg", available: true,
      },
    ],
  },
  {
    id: "sides",
    label: { ru: "На подхвате", en: "Sides", uz: "Garniturlar" },
    icon: "🙃",
    dishes: [
      { id: "si-01", name: { ru: "Картофельные дольки", en: "Potato Wedges", uz: "Kartoshka bo'laklari" }, description: { ru: "", en: "", uz: "" }, price: 29000, category: "sides", image: "/images/menu/si-01.jpg", available: true },
      { id: "si-02", name: { ru: "Картофельное пюре", en: "Mashed Potato", uz: "Kartoshka püresi" }, description: { ru: "", en: "", uz: "" }, price: 32000, category: "sides", image: "/images/menu/si-02.jpg", available: true },
      { id: "si-03", name: { ru: "Рис", en: "Rice", uz: "Guruch" }, description: { ru: "", en: "", uz: "" }, price: 20000, category: "sides", image: "/images/menu/si-03.jpg", available: true },
      { id: "si-04", name: { ru: "Картофель фри", en: "French Fries", uz: "Kartoshka fri" }, description: { ru: "", en: "", uz: "" }, price: 30000, category: "sides", image: "/images/menu/si-04.jpg", available: true },
      { id: "si-05", name: { ru: "Овощи на гриле", en: "Grilled Vegetables", uz: "Grilda sabzavotlar" }, description: { ru: "", en: "", uz: "" }, price: 37000, category: "sides", image: "/images/menu/si-05.jpg", available: true },
      { id: "si-06", name: { ru: "Рис с овощами", en: "Vegetable Rice", uz: "Sabzavotli guruch" }, description: { ru: "", en: "", uz: "" }, price: 27000, category: "sides", image: "/images/menu/si-06.jpg", available: true },
      { id: "si-07", name: { ru: "Грибочки на углях", en: "Charcoal Mushrooms", uz: "Ko'mirda qo'ziqorin" }, description: { ru: "", en: "", uz: "" }, price: 31000, category: "sides", image: "/images/menu/si-07.jpg", available: true },
    ],
  },
  {
    id: "pasta",
    label: { ru: "Нотки Италии", en: "Italian Touches", uz: "Italiya ta'mi" },
    icon: "🍝",
    dishes: [
      {
        id: "pa-01",
        name: { ru: "Болоньезе", en: "Bolognese", uz: "Bolonez" },
        description: { ru: "Мясной томатный соус к пасте (пенне или феттучини)", en: "Meat tomato sauce with pasta (penne or fettuccine)", uz: "Go'shtli tomat sousi bilan pasta" },
        price: 71000, category: "pasta", image: "/images/menu/pa-01.jpg", available: true,
      },
      {
        id: "pa-02",
        name: { ru: "Альфредо", en: "Alfredo", uz: "Alfredo" },
        description: { ru: "Сливочный соус с курицей и шампиньонами", en: "Cream sauce with chicken and champignons", uz: "Qaymoqli sous, tovuq va qo'ziqorin bilan" },
        price: 68000, category: "pasta", image: "/images/menu/pa-02.jpg", available: true,
      },
      {
        id: "pa-03",
        name: { ru: "Паста с лососем", en: "Salmon Pasta", uz: "Losos bilan pasta" },
        description: { ru: "Сливочный соус, лосось, брокколи", en: "Cream sauce, salmon, broccoli", uz: "Qaymoqli sous, losos, brokkoli" },
        price: 116000, category: "pasta", image: "/images/menu/pa-03.jpg", available: true,
      },
      {
        id: "pa-04",
        name: { ru: "Арабиата с каперсами", en: "Arrabbiata with Capers", uz: "Kapers bilan arrabbiata" },
        description: { ru: "Пикантный томатный соус, подходит вегетарианцам", en: "Spicy tomato sauce, vegetarian-friendly", uz: "Achchiq tomat sousi, vegetarianlar uchun mos" },
        price: 66000, category: "pasta", image: "/images/menu/pa-04.jpg", available: true,
      },
    ],
  },
  {
    id: "pizza",
    label: { ru: "Круглая радость", en: "Pizza", uz: "Pizza" },
    icon: "🍕",
    dishes: [
      {
        id: "pz-01",
        name: { ru: "Маргарита", en: "Margherita", uz: "Margarita" },
        description: { ru: "Томатный соус Pelati, гауда и моцарелла, помидорки", en: "Pelati tomato sauce, gouda and mozzarella, cherry tomatoes", uz: "Pelati tomat sousi, gouda va motsarella, gilos pomidori" },
        price: 96000, category: "pizza", image: "/images/menu/pz-01.jpg", available: true,
      },
      {
        id: "pz-02",
        name: { ru: "Курица с грибами", en: "Chicken & Mushroom", uz: "Tovuq va qo'ziqorin" },
        description: { ru: "Tomato Pelati, гауда и моцарелла, курочка, шампиньоны", en: "Pelati sauce, gouda and mozzarella, chicken, champignons", uz: "Tomat sousi, gouda va motsarella, tovuq, shampinonlar" },
        price: 133000, category: "pizza", image: "/images/menu/pz-02.jpg", available: true,
      },
      {
        id: "pz-03",
        name: { ru: "Пепперони", en: "Pepperoni", uz: "Pepperoni" },
        description: { ru: "Tomato Pelati, гауда и моцарелла, салями", en: "Pelati sauce, gouda and mozzarella, salami", uz: "Tomat sousi, gouda va motsarella, salami" },
        price: 133000, category: "pizza", image: "/images/menu/pz-03.jpg", available: true,
      },
      {
        id: "pz-04",
        name: { ru: "Со слабосолёной форелью", en: "Lightly Salted Trout", uz: "Engil tuzlangan forel bilan" },
        description: { ru: "Томатный соус Pelati, гауда и моцарелла, слабосолёная форель", en: "Pelati sauce, gouda and mozzarella, lightly salted trout", uz: "Tomat sousi, gouda va motsarella, engil tuzlangan forel" },
        price: 133000, category: "pizza", image: "/images/menu/pz-04.jpg", available: true,
      },
      {
        id: "pz-05",
        name: { ru: "4 сезона", en: "4 Seasons", uz: "4 fasl" },
        description: { ru: "4 части: курочка / форель / мясо / сыр", en: "4 quarters: chicken / trout / meat / cheese", uz: "4 qism: tovuq / forel / go'sht / pishloq" },
        price: 139000, category: "pizza", image: "/images/menu/pz-05.jpg", available: true,
      },
      {
        id: "pz-06",
        name: { ru: "Комби", en: "Combi", uz: "Kombi" },
        description: { ru: "Ветчина, салями, индейка, болгарский перец, помидорки, маслины, орегано", en: "Ham, salami, turkey, bell pepper, cherry tomatoes, olives, oregano", uz: "Vetchina, salami, kurka, qalampir, zaytun, oregano" },
        price: 139000, category: "pizza", image: "/images/menu/pz-06.jpg", available: true,
      },
      {
        id: "pz-07",
        name: { ru: "Барбекю", en: "BBQ Pizza", uz: "Barbek pizza" },
        description: { ru: "Томатный соус Pelati, гауда и моцарелла, соус барбекю", en: "Pelati sauce, gouda and mozzarella, BBQ sauce", uz: "Tomat sousi, gouda va motsarella, barbek sousi" },
        price: 133000, category: "pizza", image: "/images/menu/pz-07.jpg", available: true,
      },
    ],
  },
  {
    id: "bread",
    label: { ru: "Тёплый как дом", en: "Bread & Pastry", uz: "Non va pishiriqlar" },
    icon: "🤗",
    dishes: [
      { id: "br-01", name: { ru: "Гриссини (1 шт)", en: "Grissini (1 pc)", uz: "Grissini (1 dona)" }, description: { ru: "С кунжутом", en: "With sesame", uz: "Kunjut bilan" }, price: 3000, category: "bread", image: "/images/menu/br-01.jpg", available: true },
      { id: "br-02", name: { ru: "Хлеб ассорти", en: "Bread Assortment", uz: "Aralash non" }, description: { ru: "Луковый, льяной, бородинский + гриссини", en: "Onion, flax, Borodino + grissini", uz: "Piyozli, zig'irli, Borodino + grissini" }, price: 21000, category: "bread", image: "/images/menu/br-02.jpg", available: true },
      { id: "br-03", name: { ru: "Бриошь", en: "Brioche", uz: "Briosh" }, description: { ru: "Классический на сливочном масле", en: "Classic butter brioche", uz: "Klassik sariyog'li briosh" }, price: 11000, category: "bread", image: "/images/menu/br-03.jpg", available: true },
      { id: "br-04", name: { ru: "Бородинский", en: "Borodino Bread", uz: "Borodino noni" }, description: { ru: "С семенами подсолнуха и льна", en: "With sunflower and flax seeds", uz: "Kungaboqar va zig'ir urug'lari bilan" }, price: 8000, category: "bread", image: "/images/menu/br-04.jpg", available: true },
      { id: "br-05", name: { ru: "Луковый хлеб", en: "Onion Bread", uz: "Piyozli non" }, description: { ru: "Запечённый с репчатым луком", en: "Baked with onion", uz: "Piyoz bilan pishirilgan" }, price: 8000, category: "bread", image: "/images/menu/br-05.jpg", available: true },
      { id: "br-06", name: { ru: "Льняной хлеб", en: "Flax Bread (GF)", uz: "Zig'irli non (glutensiz)" }, description: { ru: "Без глютена", en: "Gluten-free", uz: "Glutensiz" }, price: 11000, category: "bread", image: "/images/menu/br-06.jpg", available: true },
    ],
  },
  {
    id: "desserts",
    label: { ru: "Ложка радости", en: "Desserts", uz: "Shirinliklar" },
    icon: "🍰",
    dishes: [
      { id: "d-01", name: { ru: "Тыквенный чизкейк", en: "Pumpkin Cheesecake", uz: "Qovoqli chizkeyk" }, description: { ru: "С карамелизированной тыквой", en: "With caramelized pumpkin", uz: "Karamelizatsiya qilingan qovoq bilan" }, price: 58000, category: "desserts", image: "/images/menu/d-01.jpg", available: true },
      { id: "d-02", name: { ru: "Грушевый тарт", en: "Pear Tart", uz: "Nok torti" }, description: { ru: "С карамелизированной грушей", en: "With caramelized pear", uz: "Karamelizatsiya qilingan nok bilan" }, price: 49000, category: "desserts", image: "/images/menu/d-02.jpg", available: true },
      { id: "d-03", name: { ru: "Синабон", en: "Cinnamon Roll", uz: "Sinnabon" }, description: { ru: "С карамельным сиропом и пюре юдзу, ванильное мороженое", en: "With caramel syrup, yuzu purée and vanilla ice cream", uz: "Karamel siropi, yuzu puresi va vanil muzqaymoq bilan" }, price: 35000, category: "desserts", image: "/images/menu/d-03.jpg", available: true },
      { id: "d-04", name: { ru: "Круассан классический", en: "Classic Croissant", uz: "Klassik kruassan" }, description: { ru: "", en: "", uz: "" }, price: 15000, category: "desserts", image: "/images/menu/d-04.jpg", available: true },
      { id: "d-05", name: { ru: "Трайфл медовик", en: "Honey Cake Trifle", uz: "Asal tort trifli" }, description: { ru: "Медовые коржи, крем из сливок и сметаны, фисташки", en: "Honey layers, cream from sour cream and whipping cream, pistachios", uz: "Asal qatlamlari, qaymoq kremi, pistashka" }, price: 37000, category: "desserts", image: "/images/menu/d-05.jpg", available: true },
      { id: "d-06", name: { ru: "Печенье шоколадное (1 шт)", en: "Chocolate Cookie (1 pc)", uz: "Shokoladli pechenye (1 dona)" }, description: { ru: "С кусочками шоколада", en: "With chocolate chunks", uz: "Shokolad bo'laklari bilan" }, price: 6000, category: "desserts", image: "/images/menu/d-06.jpg", available: true },
      { id: "d-07", name: { ru: "Арахисовое печенье (1 шт)", en: "Peanut Cookie (1 pc)", uz: "Yeryong'oqli pechenye (1 dona)" }, description: { ru: "Из арахисовой пасты с арахисом", en: "Peanut butter cookie with peanuts", uz: "Yeryong'oq pastas va yeryong'oq bilan" }, price: 6000, category: "desserts", image: "/images/menu/d-07.jpg", available: true },
      { id: "d-08", name: { ru: "Макаронс лотус", en: "Lotus Macaron", uz: "Lotus makaroni" }, description: { ru: "Со вкусом карамельного печенья Lotus", en: "Lotus biscuit flavour", uz: "Lotus pechenyesi ta'mi" }, price: 17000, category: "desserts", image: "/images/menu/d-08.jpg", available: true },
      { id: "d-09", name: { ru: "Тёмный лес", en: "Black Forest", uz: "Qora o'rmon" }, description: { ru: "Шоколадный бисквит, заварной шоколадный крем, вишня", en: "Chocolate sponge, chocolate custard cream, cherry", uz: "Shokolad biskuit, shokolad kremi, gilos" }, price: 57000, category: "desserts", image: "/images/menu/d-09.jpg", available: true },
      { id: "d-10", name: { ru: "Макаронс шоколадный", en: "Chocolate Macaron", uz: "Shokoladli makaron" }, description: { ru: "На миндальной муке с шоколадным кремом", en: "Almond flour base with chocolate cream", uz: "Bodom uni asosida shokolad kremi bilan" }, price: 17000, category: "desserts", image: "/images/menu/d-10.jpg", available: true },
      { id: "d-11", name: { ru: "Десерт лотус", en: "Lotus Dessert", uz: "Lotus deserti" }, description: { ru: "Печенье Lotus, крем-чиз, паста Lotus", en: "Lotus biscuit, cream cheese, Lotus paste", uz: "Lotus pechenyesi, krem-pishloq, Lotus pastasi" }, price: 52000, category: "desserts", image: "/images/menu/d-11.jpg", available: true },
      { id: "d-12", name: { ru: "Мороженое ваниль", en: "Vanilla Ice Cream", uz: "Vanil muzqaymoq" }, description: { ru: "", en: "", uz: "" }, price: 10000, category: "desserts", image: "/images/menu/d-12.jpg", available: true },
      { id: "d-13", name: { ru: "Чизкейк Сан Себастьян", en: "San Sebastian Cheesecake", uz: "San Sebastyan chizkeyki" }, description: { ru: "Крем-чиз, сливочный сыр, сахарная пудра, молочный шоколад", en: "Cream cheese, whipping cream, powdered sugar, milk chocolate", uz: "Krem-pishloq, qaymoq pishloq, shakar kukuni, sut shokoladi" }, price: 57000, category: "desserts", image: "/images/menu/d-13.jpg", available: true },
      { id: "d-14", name: { ru: "Медовик", en: "Honey Cake", uz: "Asal torti" }, description: { ru: "Медовые коржи, крем из сгущёнки, сливок и мёда", en: "Honey layers, condensed milk cream with honey", uz: "Asal qatlamlari, sut qaymoq va asal kremi" }, price: 45000, category: "desserts", image: "/images/menu/d-14.jpg", available: true },
    ],
  },
  {
    id: "coffee",
    label: { ru: "Кофе", en: "Coffee", uz: "Qahva" },
    icon: "☕",
    dishes: [
      { id: "c-01", name: { ru: "Эспрессо", en: "Espresso", uz: "Espresso" }, description: { ru: "Арабика 100%, средняя или тёмная обжарка", en: "100% Arabica, medium or dark roast", uz: "100% Arabika, o'rta yoki to'q qovurish" }, price: 26000, category: "coffee", image: "/images/menu/c-01.jpg", available: true },
      { id: "c-02", name: { ru: "Американо", en: "Americano", uz: "Americano" }, description: { ru: "Арабика 100%, средняя или тёмная обжарка", en: "100% Arabica, medium or dark roast", uz: "100% Arabika" }, price: 26000, category: "coffee", image: "/images/menu/c-02.jpg", available: true },
      { id: "c-03", name: { ru: "Капучино", en: "Cappuccino", uz: "Kapuchino" }, description: { ru: "Эспрессо, горячее молоко и молочная пена 1:1:1", en: "Espresso, hot milk and milk foam 1:1:1", uz: "Espresso, issiq sut va sut ko'pigi 1:1:1" }, price: 31000, category: "coffee", image: "/images/menu/c-03.jpg", available: true },
      { id: "c-04", name: { ru: "Латте", en: "Latte", uz: "Latte" }, description: { ru: "Эспрессо с молоком 3:1", en: "Espresso with milk 3:1", uz: "Espresso va sut 3:1" }, price: 36000, category: "coffee", image: "/images/menu/c-04.jpg", available: true },
      { id: "c-05", name: { ru: "Латте крем-брюле с маршмеллоу", en: "Crème Brûlée Latte", uz: "Krem-brule latteha bilan marshmallow" }, description: { ru: "Латте, сироп крем-брюле, взбитые сливки, маршмелоу", en: "Latte, crème brûlée syrup, whipped cream, marshmallow", uz: "Latte, krem-brule siropi, ko'pirtirilgan qaymoq, marshmallow" }, price: 41000, category: "coffee", image: "/images/menu/c-05.jpg", available: true },
      { id: "c-06", name: { ru: "Flat White", en: "Flat White", uz: "Flat White" }, description: { ru: "Двойной эспрессо с молоком", en: "Double espresso with milk", uz: "Ikki qismli espresso va sut" }, price: 36000, category: "coffee", image: "/images/menu/c-06.jpg", available: true },
      { id: "c-07", name: { ru: "Раф с сиропом", en: "Raf with Syrup", uz: "Siropli Raf" }, description: { ru: "20% сливки, эспрессо, сироп на выбор", en: "20% cream, espresso, syrup of choice", uz: "20% qaymoq, espresso, tanlangan sirop" }, price: 41000, category: "coffee", image: "/images/menu/c-07.jpg", available: true },
      { id: "c-08", name: { ru: "Фиалковый латте", en: "Violet Latte", uz: "Binafsha latteha" }, description: { ru: "Латте макиато с нотками фиалки", en: "Latte macchiato with violet notes", uz: "Binafsha notali latte makiato" }, price: 36000, category: "coffee", image: "/images/menu/c-08.jpg", available: true },
      { id: "c-09", name: { ru: "Айс американо", en: "Iced Americano", uz: "Muz Americano" }, description: { ru: "Холодный эспрессо + сахарный сироп отдельно", en: "Cold espresso + sugar syrup on side", uz: "Sovuq espresso + shakar siropi alohida" }, price: 26000, category: "coffee", image: "/images/menu/c-09.jpg", available: true },
      { id: "c-10", name: { ru: "Айс капучино", en: "Iced Cappuccino", uz: "Muz kapuchino" }, description: { ru: "Эспрессо и взбитое холодное молоко", en: "Espresso and cold frothed milk", uz: "Espresso va sovuq ko'pirtirilgan sut" }, price: 28000, category: "coffee", image: "/images/menu/c-10.jpg", available: true },
      { id: "c-11", name: { ru: "Айс латте", en: "Iced Latte", uz: "Muz latte" }, description: { ru: "Эспрессо, молоко, лёд", en: "Espresso, milk, ice", uz: "Espresso, sut, muz" }, price: 33000, category: "coffee", image: "/images/menu/c-11.jpg", available: true },
      { id: "c-12", name: { ru: "Банановый кофе", en: "Banana Coffee", uz: "Bananli qahva" }, description: { ru: "Эспрессо, молоко, мороженое, банан", en: "Espresso, milk, ice cream, banana", uz: "Espresso, sut, muzqaymoq, banan" }, price: 38000, category: "coffee", image: "/images/menu/c-12.jpg", available: true },
      { id: "c-13", name: { ru: "Шмель", en: "Bumblebee", uz: "Ariqovoq" }, description: { ru: "Эспрессо, апельсиновый сок, карамельный сироп", en: "Espresso, orange juice, caramel syrup", uz: "Espresso, apelsin sharbati, karamel siropi" }, price: 38000, category: "coffee", image: "/images/menu/c-13.jpg", available: true },
      { id: "c-14", name: { ru: "Эспрессо-тоник", en: "Espresso Tonic", uz: "Espresso-tonik" }, description: { ru: "Эспрессо, швепс, лайм, сахарный сироп", en: "Espresso, tonic water, lime, sugar syrup", uz: "Espresso, tonik suv, laym, shakar siropi" }, price: 36000, category: "coffee", image: "/images/menu/c-14.jpg", available: true },
      { id: "c-15", name: { ru: "Матча латте", en: "Matcha Latte", uz: "Matcha latte" }, description: { ru: "", en: "", uz: "" }, price: 41000, category: "coffee", image: "/images/menu/c-15.jpg", available: true },
      { id: "c-16", name: { ru: "Матча капучино", en: "Matcha Cappuccino", uz: "Matcha kapuchino" }, description: { ru: "", en: "", uz: "" }, price: 46000, category: "coffee", image: "/images/menu/c-16.jpg", available: true },
      { id: "c-17", name: { ru: "Матча кокосовый", en: "Coconut Matcha", uz: "Kokosli matcha" }, description: { ru: "", en: "", uz: "" }, price: 51000, category: "coffee", image: "/images/menu/c-17.jpg", available: true },
    ],
  },
  {
    id: "drinks",
    label: { ru: "Напитки", en: "Drinks", uz: "Ichimliklar" },
    icon: "🥤",
    dishes: [
      { id: "dr-01", name: { ru: "Яблочный фреш", en: "Apple Juice", uz: "Olma freshi" }, description: { ru: "Свежевыжатый яблочный сок", en: "Freshly squeezed apple juice", uz: "Yangi siqilgan olma sharbati" }, price: 41000, category: "drinks", image: "/images/menu/dr-01.jpg", available: true },
      { id: "dr-02", name: { ru: "Апельсиновый фреш", en: "Orange Juice", uz: "Apelsin freshi" }, description: { ru: "Свежевыжатый апельсиновый сок", en: "Freshly squeezed orange juice", uz: "Yangi siqilgan apelsin sharbati" }, price: 66000, category: "drinks", image: "/images/menu/dr-02.jpg", available: true },
      { id: "dr-03", name: { ru: "Морковный фреш", en: "Carrot Juice", uz: "Sabzi freshi" }, description: { ru: "", en: "", uz: "" }, price: 36000, category: "drinks", image: "/images/menu/dr-03.jpg", available: true },
      { id: "dr-04", name: { ru: "Яблочно-морковный фреш", en: "Apple-Carrot Juice", uz: "Olma-sabzi freshi" }, description: { ru: "", en: "", uz: "" }, price: 43000, category: "drinks", image: "/images/menu/dr-04.jpg", available: true },
      { id: "dr-05", name: { ru: "Яблочно-апельсиновый фреш", en: "Apple-Orange Juice", uz: "Olma-apelsin freshi" }, description: { ru: "", en: "", uz: "" }, price: 64000, category: "drinks", image: "/images/menu/dr-05.jpg", available: true },
      { id: "dr-06", name: { ru: "Яблоко+сельдерей (детокс)", en: "Apple & Celery Detox", uz: "Olma+selderey (detoks)" }, description: { ru: "Яблочный фреш со стеблем сельдерея", en: "Apple juice blended with celery stick", uz: "Olma freshi va selderey" }, price: 59000, category: "drinks", image: "/images/menu/dr-06.jpg", available: true },
      { id: "dr-07", name: { ru: "Щавель+апельсин+ананас (детокс)", en: "Sorrel+Orange+Pineapple", uz: "Qo'ng'iroq o't+apelsin+ananas" }, description: { ru: "Мякоть апельсина, листья щавеля, ананасовый сок", en: "Orange flesh, sorrel leaves, pineapple juice", uz: "Apelsin go'shti, qo'ng'iroq o't, ananas sharbati" }, price: 59000, category: "drinks", image: "/images/menu/dr-07.jpg", available: true },
      { id: "dr-08", name: { ru: "Классический лимонад 450 мл", en: "Classic Lemonade 450 ml", uz: "Klassik limonad 450 ml" }, description: { ru: "Мята, лимон, сахарный сироп, газ", en: "Mint, lemon, sugar syrup, sparkling", uz: "Nane, limon, shakar siropi, gazli" }, price: 54000, category: "drinks", image: "/images/menu/dr-08.jpg", available: true },
      { id: "dr-09", name: { ru: "Тархун 450 мл", en: "Tarragon Lemonade 450 ml", uz: "Tarxun limonadi 450 ml" }, description: { ru: "Сироп тархун, имбирь, яблочный фреш, лимон, мята, газ", en: "Tarragon syrup, ginger, apple juice, lemon, mint, sparkling", uz: "Tarxun siropi, zanjabil, olma freshi, limon, nane" }, price: 54000, category: "drinks", image: "/images/menu/dr-09.jpg", available: true },
      { id: "dr-10", name: { ru: "Мохито маракуйя 450 мл", en: "Passion Fruit Mojito 450 ml", uz: "Marakuya moito 450 ml" }, description: { ru: "Лайм, мята, сироп маракуйя, газ", en: "Lime, mint, passion fruit syrup, sparkling", uz: "Laym, nane, marakuya siropi, gazli" }, price: 38000, category: "drinks", image: "/images/menu/dr-10.jpg", available: true },
      { id: "dr-11", name: { ru: "Классический мохито 450 мл", en: "Classic Mojito 450 ml", uz: "Klassik moito 450 ml" }, description: { ru: "Мята, лайм, сахарный сироп, газ", en: "Mint, lime, sugar syrup, sparkling", uz: "Nane, laym, shakar siropi, gazli" }, price: 56000, category: "drinks", image: "/images/menu/dr-11.jpg", available: true },
      { id: "dr-12", name: { ru: "Шейк классический", en: "Classic Milkshake", uz: "Klassik milkshake" }, description: { ru: "", en: "", uz: "" }, price: 53000, category: "drinks", image: "/images/menu/dr-12.jpg", available: true },
      { id: "dr-13", name: { ru: "Шейк малиновый", en: "Raspberry Milkshake", uz: "Maysalam milkshake" }, description: { ru: "", en: "", uz: "" }, price: 53000, category: "drinks", image: "/images/menu/dr-13.jpg", available: true },
      { id: "dr-14", name: { ru: "Шейк банановый", en: "Banana Milkshake", uz: "Banan milkshake" }, description: { ru: "", en: "", uz: "" }, price: 53000, category: "drinks", image: "/images/menu/dr-14.jpg", available: true },
      { id: "dr-15", name: { ru: "Шейк OREO", en: "OREO Milkshake", uz: "OREO milkshake" }, description: { ru: "", en: "", uz: "" }, price: 53000, category: "drinks", image: "/images/menu/dr-15.jpg", available: true },
      { id: "dr-16", name: { ru: "Вода Зам-Зам 250 мл", en: "Zam-Zam Water 250 ml", uz: "Zam-Zam suvi 250 ml" }, description: { ru: "", en: "", uz: "" }, price: 20000, category: "drinks", image: "/images/menu/dr-16.jpg", available: true },
    ],
  },
  {
    id: "tea",
    label: { ru: "Авторские чаи", en: "Signature Teas", uz: "Muallif choylari" },
    icon: "🍵",
    dishes: [
      { id: "t-01", name: { ru: "Детский сад 500 мл", en: "Kindergarten Tea 500 ml", uz: "Bog'cha choyi 500 ml" }, description: { ru: "Какао, печенье (шоколадное, арахисовое, имбирное), маршмелоу", en: "Cocoa base, cookies (chocolate, peanut, ginger), marshmallow", uz: "Kakao asosida, pechenye, marshmallow" }, price: 70000, category: "tea", image: "/images/menu/t-01.jpg", available: true },
      { id: "t-02", name: { ru: "Осенний базар 500 мл", en: "Autumn Bazaar Tea 500 ml", uz: "Kuzgi bozor choyi 500 ml" }, description: { ru: "Горный чай, малина, имбирь, лайм, мёд", en: "Mountain tea, raspberry, ginger, lime, honey", uz: "Tog' choyi, maysalam, zanjabil, laym, asal" }, price: 47000, category: "tea", image: "/images/menu/t-02.jpg", available: true },
      { id: "t-03", name: { ru: "Подушечный чай 500 мл", en: "Podushechnaya Tea 500 ml", uz: "Podushechnaya choyi 500 ml" }, description: { ru: "Чёрный чай, персиковый сок и сироп, апельсин, лимон, мята", en: "Black tea, peach juice and syrup, orange, lemon, mint", uz: "Qora choy, shaftoli sharbati, apelsin, limon, nane" }, price: 53000, category: "tea", image: "/images/menu/t-03.jpg", available: true },
      { id: "t-04", name: { ru: "Горный чай с мёдом 500 мл", en: "Mountain Honey Tea 500 ml", uz: "Asalli tog' choyi 500 ml" }, description: { ru: "Горные травы: чабрец, шиповник, ромашка, шафран, мята, мёд", en: "Mountain herbs: thyme, rosehip, chamomile, saffron, mint, honey", uz: "Tog' o'tlari: chimens, namatak, chamomile, za'faron, nane, asal" }, price: 59000, category: "tea", image: "/images/menu/t-04.jpg", available: true },
      { id: "t-05", name: { ru: "Масала 500 мл", en: "Masala Tea 500 ml", uz: "Masala choyi 500 ml" }, description: { ru: "Молочный чёрный чай, имбирь, чёрный перец, корица, бадьян, гвоздика, мёд", en: "Milk black tea, ginger, black pepper, cinnamon, star anise, cloves, honey", uz: "Suth qora choy, zanjabil, qalampir, darchil, zira, asal" }, price: 66000, category: "tea", image: "/images/menu/t-05.jpg", available: true },
      { id: "t-06", name: { ru: "Пуэр с клюквой 500 мл", en: "Pu-erh with Cranberry 500 ml", uz: "Klyukva bilan Puer 500 ml" }, description: { ru: "Пуэр + клюква, тонизирующий", en: "Pu-erh with cranberry, energising", uz: "Puer + klyukva, tonik ta'sir" }, price: 59000, category: "tea", image: "/images/menu/t-06.jpg", available: true },
      { id: "t-07", name: { ru: "Молочный улун 500 мл", en: "Milk Oolong 500 ml", uz: "Suthli Oolong 500 ml" }, description: { ru: "Зелёный чай с ароматом сливок и молока", en: "Green tea with creamy milk aroma", uz: "Sut aromatli yashil choy" }, price: 59000, category: "tea", image: "/images/menu/t-07.jpg", available: true },
      { id: "t-08", name: { ru: "Эрл Грей 500 мл", en: "Earl Grey 500 ml", uz: "Erl Grey 500 ml" }, description: { ru: "Чёрный чай с бергамотом", en: "Black tea with bergamot", uz: "Bergamot bilan qora choy" }, price: 26000, category: "tea", image: "/images/menu/t-08.jpg", available: true },
    ],
  },
  {
    id: "hot_drinks",
    label: { ru: "Горячие напитки", en: "Hot Drinks", uz: "Issiq ichimliklar" },
    icon: "🫖",
    dishes: [
      { id: "hd-01", name: { ru: "Горячий шоколад", en: "Hot Chocolate", uz: "Issiq shokolad" }, description: { ru: "Густой шоколад с миндалём", en: "Rich chocolate with almond", uz: "To'q shokolad va bodom bilan" }, price: 30000, category: "hot_drinks", image: "/images/menu/hd-01.jpg", available: true },
      { id: "hd-02", name: { ru: "Какао", en: "Cocoa", uz: "Kakao" }, description: { ru: "Молочный напиток с мягким шоколадным вкусом, маршмелоу", en: "Milk cocoa with marshmallow", uz: "Sut asosida kakao, marshmallow bilan" }, price: 32000, category: "hot_drinks", image: "/images/menu/hd-02.jpg", available: true },
      { id: "hd-03", name: { ru: "Какао на кокосовом", en: "Coconut Cocoa", uz: "Kokos sutli kakao" }, description: { ru: "Какао на кокосовом молоке", en: "Cocoa on coconut milk", uz: "Kokos suti asosida kakao" }, price: 37000, category: "hot_drinks", image: "/images/menu/hd-03.jpg", available: true },
      { id: "hd-04", name: { ru: "Глинтвейн 500 мл", en: "Mulled Wine 500 ml", uz: "Glintvein 500 ml" }, description: { ru: "Горячий напиток на основе вишнёвого сока, пряностей, яблок и лимона", en: "Hot drink based on cherry juice, spices, apples and lemon", uz: "Gilos sharbati, ziravorlar, olma va limon asosida issiq ichimlik" }, price: 45000, category: "hot_drinks", image: "/images/menu/hd-04.jpg", available: true },
      { id: "hd-05", name: { ru: "Облепиха имбирь 500 мл", en: "Sea Buckthorn Ginger 500 ml", uz: "Chaylarang zanjabilli 500 ml" }, description: { ru: "Облепиха, лимон, апельсин, имбирь, мёд", en: "Sea buckthorn, lemon, orange, ginger, honey", uz: "Chaylarang, limon, apelsin, zanjabil, asal" }, price: 49000, category: "hot_drinks", image: "/images/menu/hd-05.jpg", available: true },
      { id: "hd-06", name: { ru: "Цитрусовый имбирь 500 мл", en: "Citrus Ginger 500 ml", uz: "Sitrus-zanjabilli 500 ml" }, description: { ru: "Манго, лимон, апельсин, мята, имбирь", en: "Mango, lemon, orange, mint, ginger", uz: "Mango, limon, apelsin, nane, zanjabil" }, price: 50000, category: "hot_drinks", image: "/images/menu/hd-06.jpg", available: true },
      { id: "hd-07", name: { ru: "Имбирно-яблочный 500 мл", en: "Ginger Apple 500 ml", uz: "Zanjabilli olma 500 ml" }, description: { ru: "Яблоки, лимон, мята, имбирь, мёд", en: "Apples, lemon, mint, ginger, honey", uz: "Olma, limon, nane, zanjabil, asal" }, price: 55000, category: "hot_drinks", image: "/images/menu/hd-07.jpg", available: true },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price) + " сум";
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getDishById(id: string): Dish | undefined {
  for (const cat of categories) {
    const dish = cat.dishes.find((d) => d.id === id);
    if (dish) return dish;
  }
  return undefined;
}
