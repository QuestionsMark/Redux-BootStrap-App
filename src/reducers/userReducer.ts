import { User } from "../interfaces/userInterfaces";
import { Action } from "../interfaces/generalInterfaces";

import { ADD, DELETE, EDIT } from '../actions/userActions.ts';

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur, culpa adipisci eius totam esse qui repellat laborum, ut vero, corporis corrupti iste modi pariatur nulla voluptatibus incidunt suscipit. Minima recusandae nesciunt nihil numquam ad amet ut quam, sint quasi voluptatum non, ab sequi maiores reprehenderit vitae? Obcaecati neque provident et consequatur numquam. Veniam consequatur eum sit incidunt nobis sapiente, magni assumenda eveniet officiis quidem velit ea mollitia aspernatur quos iste a distinctio numquam consectetur cum consequuntur cupiditate ad.
Id necessitatibus quis consequatur fuga error beatae commodi! Impedit atque veniam provident consectetur, non libero veritatis? Eligendi itaque, ipsum corporis blanditiis laborum quia necessitatibus culpa dolorem ea numquam magni! Dolorem, dolores? Quisquam aliquam libero magnam sed explicabo, ea consectetur tempora exercitationem qui saepe repellat, nulla facilis maiores culpa praesentium atque voluptatem! Quibusdam eveniet magnam reiciendis animi dignissimos excepturi, perferendis sapiente possimus maiores id maxime dolorum asperiores consectetur ipsum consequuntur, omnis suscipit quam. Rerum expedita doloribus vitae, voluptates, delectus amet quae distinctio cum ut ex nisi. Velit ex magnam, ullam repudiandae eveniet facere eligendi ipsam qui dicta, architecto quia molestias, hic ad officiis minima aut rerum. Nam magnam, maxime iusto recusandae unde fuga! Assumenda esse, aut sit odit itaque ut hic necessitatibus cum nam eligendi laborum perspiciatis saepe ullam deleniti laboriosam distinctio veritatis expedita placeat ab ex. Animi provident at soluta, quidem maiores delectus eveniet eum perspiciatis omnis natus debitis accusamus nisi, ullam non quam. Temporibus nihil veniam, facilis tempore nesciunt exercitationem soluta?
Ea quasi quaerat perferendis quo vitae at voluptatibus placeat architecto similique ipsa tenetur nostrum nemo ullam neque iusto sunt necessitatibus voluptate ipsum, non expedita reiciendis saepe doloremque? Ducimus molestiae, architecto eveniet explicabo ipsam ex officiis praesentium assumenda sapiente vitae dolorem distinctio veritatis, modi maxime facere reiciendis earum quae magnam laborum rerum deleniti similique ea. Fuga consequuntur facere praesentium quia eius molestias maiores amet suscipit repellendus quam non qui nisi aspernatur illum dolores ex ducimus eos, et pariatur tenetur rerum? Laudantium a repudiandae tenetur corrupti voluptate laboriosam at perspiciatis quisquam quis, autem nihil odio vitae voluptatem impedit sint dolorem culpa itaque ullam iusto! Veritatis impedit dolor praesentium reprehenderit aliquam illo incidunt nemo perferendis cupiditate dolores adipisci nesciunt deserunt quasi possimus dolorem distinctio temporibus tempore, ducimus saepe quisquam totam amet? Odit nam veritatis ut. Esse ea eaque id ipsum ratione delectus dolores. Odio, quod voluptas optio unde reiciendis fugiat harum consectetur iure perferendis, incidunt neque sunt commodi quos corrupti! Cumque atque veritatis vitae dicta consequuntur temporibus ea alias ex eius ullam in repellendus officia voluptas, aut assumenda facere animi? Neque repellendus illo maiores! Autem, libero non sequi quidem obcaecati quisquam qui ullam omnis iusto molestiae iste vel inventore labore excepturi totam odio veniam voluptate natus ratione doloribus earum vitae placeat eligendi. Cumque soluta maiores, fuga corrupti molestiae iure suscipit quas alias esse cupiditate? Ab iusto perferendis in ipsa mollitia ipsum quos ad nesciunt ipsam numquam harum maiores aspernatur sunt eos veniam necessitatibus, doloribus quod obcaecati doloremque aperiam cum earum a commodi dolorem. Ipsa ea doloremque nobis laboriosam, quo eaque. Ipsum mollitia recusandae accusantium esse incidunt deleniti voluptas modi aut et tempora. Consectetur quibusdam odio maxime eaque error, nemo in reprehenderit illo, quisquam, tempore quidem? Maxime tempora eaque, recusandae ducimus voluptates a vitae explicabo nesciunt voluptas culpa asperiores similique officia expedita quasi illo doloribus earum, sed dolore? Cupiditate earum provident, tenetur maiores, ex ab et, eligendi nobis sequi quae quas distinctio. Repellat magni recusandae, consectetur labore, ullam eos repellendus debitis rerum illo iure temporibus animi blanditiis voluptates pariatur ipsum modi possimus similique, eveniet sequi laboriosam illum! Atque voluptatum ullam ipsum architecto labore et quia earum ratione cupiditate illum fuga, iure commodi harum, tenetur dolore asperiores. Voluptas quis reiciendis recusandae at aperiam sed qui sequi eligendi. Placeat veritatis impedit laboriosam provident deleniti dolores officiis maxime laudantium vel id quae, beatae optio in exercitationem qui. Eum, facilis cupiditate. Qui ab perspiciatis sequi laborum enim pariatur ea voluptatem nostrum recusandae sit, est doloremque temporibus et eos aut quisquam quidem. Aut, itaque inventore aliquid eius voluptas aperiam repellendus iusto nihil eaque dicta quam animi rem veritatis. Voluptatum, cupiditate perspiciatis libero accusantium pariatur debitis provident ipsam eligendi eaque ducimus, quidem explicabo soluta dolorum adipisci? Impedit doloremque a vel deserunt. Quis quisquam pariatur eaque optio rerum excepturi, tenetur possimus impedit officiis, doloremque cumque mollitia? Nemo veniam commodi iusto alias! Cum laborum dignissimos expedita blanditiis sed facilis eveniet excepturi sapiente? Facilis, repudiandae sunt voluptatibus voluptate cum sequi nihil nisi dicta, officia excepturi ad. Sequi id quod, temporibus provident ullam ut in ad quis qui blanditiis nihil porro? Quisquam cumque expedita at quos, esse, temporibus, itaque vitae explicabo eos illum veritatis fugiat rem architecto dolores asperiores minima repellat ea.
Soluta cupiditate placeat alias perferendis delectus laborum amet? Totam fugiat vitae blanditiis! Nesciunt id doloremque inventore magnam libero, magni, vero repellat repudiandae architecto earum, nostrum omnis saepe suscipit! Beatae iusto laboriosam eius nesciunt modi! Cumque quam temporibus at. Reiciendis nesciunt, repellat possimus et hic iste quibusdam, perferendis doloremque mollitia earum dicta asperiores eos placeat, libero voluptate consequuntur temporibus veritatis facere molestiae unde perspiciatis nihil officiis. Animi corrupti quaerat, perferendis doloribus soluta perspiciatis commodi deleniti odio quae similique, aut aspernatur cupiditate fuga. Eveniet quo itaque, sequi qui ullam earum est facilis placeat necessitatibus ducimus dolor minus dolore vitae harum sapiente, soluta repellat quasi optio mollitia impedit. Omnis laboriosam, reprehenderit quasi quidem consequuntur alias nam? Quos magnam omnis doloribus, ratione pariatur totam sequi reprehenderit corporis. Possimus similique animi libero tempore vero cupiditate illum officia magnam repudiandae vel atque odit, doloribus dolore, facilis voluptatum, officiis id. Nam, ullam facere. Dolor, odit! Ipsum nostrum obcaecati consequuntur aliquid excepturi quis nobis molestiae corporis! Optio amet eum provident molestiae et, suscipit, nisi ut officia accusamus itaque, vel quidem aperiam maiores. Voluptates in nam perspiciatis, modi quis, fugiat vitae atque impedit necessitatibus nemo, exercitationem veritatis ex at laboriosam! Eveniet doloribus repellendus nisi dolores, suscipit magnam assumenda facere culpa fugiat porro aliquid deleniti quo unde? Dolorum sed saepe, rem neque nesciunt quos, a optio aspernatur minima fugiat cupiditate? Quae possimus tenetur tempore temporibus nostrum. Libero numquam quidem magni eos?`;

const defaultUsers = [
    {
        id: 'ba7b8522-1908-49a9-9550-dc4176a492f1',
        avatar: '/images/oregairu3.webp',
        color: '#ffb700',
        description,
        email: 'siema@onet.pl',
        username: 'Question Mark',
    },
    {
        id: 'fad69737-4dfa-41d0-91a1-77ae0dd80c04',
        avatar: '/images/sword-art-online2.webp',
        color: '#cda970',
        description,
        email: 'przemo@gmail.com',
        username: 'Przemciosss',
    },
    {
        id: '5ce74a3b-0206-4759-8388-c1ac4afa4dfc',
        avatar: '/images/death-note.webp',
        color: '#30e53a',
        description,
        email: 'popus@wp.pl',
        username: 'PpekKOX',
    },
    {
        id: '450c3450-7bca-4c35-a332-fee9c38cbde3',
        avatar: '/images/piano-no-mori.webp',
        color: '#80450a',
        description,
        email: 'antos@wp.pl',
        username: 'T0NY',
    },
    {
        id: 'd3caa1d8-8ba6-449b-9dfb-a0912903a5c6',
        avatar: '/images/bunny-girl.webp',
        color: '#1c2882',
        description,
        email: 'grzes@onet.pl',
        username: 'Grzejson',
    },
    {
        id: 'cec6bb45-a1d3-4ae3-ae28-b196cc8c0fb9',
        avatar: '/images/konosuba1.webp',
        color: '#6d1a5d',
        description,
        email: 'potato@onet.pl',
        username: 'Potato Shef',
    },
    {
        id: '7d0c808f-9872-4400-a23a-952e95ecf9f0',
        avatar: '/images/konosuba2.webp',
        color: '#42d4ae',
        description,
        email: 'turboburbo@onet.pl',
        username: 'Turbo Bocz',
    },
    {
        id: '2764fab1-081d-43f1-9063-f0c704d6e218',
        avatar: '/images/violet-evergarden.webp',
        color: '#9e6373',
        description,
        email: 'majster123@onet.pl',
        username: 'Pan Majster',
    },
    {
        id: 'ad1e7bb4-d0ae-431b-a7d5-73e9beb2ddf0',
        avatar: '/images/kimi-no-na-wa.webp',
        color: '#9d1486',
        description,
        email: 'olex321@onet.pl',
        username: 'Żon',
    },
    {
        id: '4dc309a9-f176-4602-8006-135658784708',
        avatar: '/images/kotonoha-no-niva.webp',
        color: '#5d5fe2',
        description,
        email: 'blue@onet.pl',
        username: 'Blev',
    },
    {
        id: '50e8f1e9-38bb-48b6-b4ae-8b74d423a235',
        avatar: '/images/sword-art-online3.webp',
        color: '#291764',
        description,
        email: 'kszysiu@onet.pl',
        username: 'Kszysiu',
    },
    {
        id: 'd874f3d1-34b0-4be5-a8de-4f0744a1951c',
        avatar: '/images/shuumatsu.webp',
        color: '#8bf6a4',
        description,
        email: 'hell@onet.pl',
        username: 'Hellout',
    },
    {
        id: '11871320-934f-4319-af03-e2fbe80840b7',
        avatar: '/images/fruits-basket-final.webp',
        color: '#45330c',
        description,
        email: 'matisek@onet.pl',
        username: 'Miś Matiś',
    },
]

export const userReducer = (state: User[] = defaultUsers, action: Action): User[] => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];

        case DELETE:
            return state.filter(user => user.id !== action.payload.id);

        case EDIT:
            return state.map(user => {
                if (user.id === action.payload.id) {
                    if (action.payload.avatar) return { ...action.payload };
                    return { ...action.payload, avatar: user.avatar };
                }
                return user;
            });

        default:
            console.warn(`Nie znaleziono akcji typu: ${action.type}!`);
            return state;
    }
};