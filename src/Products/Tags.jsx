import React from 'react'
import './Products.css'
import Product from '../Product/Mycard';

const Products = () => {
  const products =[
    {
      "id": 1,
      "title": "Alaskan Klee Kai",
      "description": "¿Le gustan los huskies pero no tiene espacio para un perro de tamaño mediano? Le presentamos al Alaskan Klee Kai: este perro tiene el mismo aspecto que un husky, pero sólo pesa 4,5 kg. Si necesita más razones para adoptar uno, quizá te guste saber que la actriz y modelo británica Sophie Turner tiene este adorable cachorro.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-alaskan-klee-kai-646c693637acc.jpeg?crop=0.678xw:0.849xh;0.322xw,0.0208xh&resize=980:*",
    },
    {
      "id": 2,
      "title": "Rat Terrier",
      "description": "Además de ser excelentes exterminadores. un aspecto que deben tener en cuenta los urbanitas convencidos, los perros Rat Terrier son leales, alegres y tienen un pelaje suave como la seda.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-rat-terrier-646c6d58ae2fe.jpeg?crop=0.798xw:1.00xh;0.178xw,0&resize=980:*",
    },
    {
      "id": 3,
      "title": "Yorkipoo",
      "description": "Con la diminuta estatura de un Yorkshire terrier y la inteligencia de un caniche miniatura. Es una de las adorables razas mixtas de perro, en su versión mestiza más juguetona, así que es la mascota perfecta para las familias. Además, ¡los Yorkie Poo son hipoalergénicos!",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-yorkipoo-646c6df595f5c.jpeg?crop=0.7991836734693878xw:1xh;center,top&resize=980:*",
    },
    {
      "id": 4,
      "title": "Pomeranian",
      "description": "Los Pomeranian son una de las razas de perro más fieles y cariñosas con la familia. juguetón del Pomerania te mantendrá activo con cortos paseos diarios. su peso de 2 a 3 kilos les hace demasiado delicados para los niños más juguetones. Los pomeranias están alerta y son curiosos, algunos incluso pueden parecer demasiado cotillas.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-pomeranian-646c6b3fd0a73.jpeg?crop=0.7959183673469388xw:1xh;center,top&resize=980:*",
    },
    {
      "id": 5,
      "title": "Chin japonés",
      "description": "Estas mascotas han sido acompañantes de la realeza japonesa desde hace mucho tiempo. Los regios cachorros son unos dulces y mimosos perros falderos.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-chin-japones-646c6ebd8a32b.jpeg?crop=0.801xw:1.00xh;0.106xw,0&resize=980:*",
    },
    {
      "id": 6,
      "title": "Pumi",
      "description": "Es una raza de perro pequeño para vivir en ciudad, porque los Pumi son una monada, aunque sepas poco de ellos. Son unas mascotas muy tímidas, pero te van a enamorar con sus grandes ojos y su pelaje rizado.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-pumi-646c6f6527839.jpeg?crop=0.798xw:1.00xh;0.0623xw,0&resize=980:*",
    },
    {
      "id": 7,
      "title": "Bolonka",
      "description": "Estos perros son primos del también esponjoso Bichon Frisé, del que también hablamos en este artículo, los Bolonkas son una raza de perros falderos curiosos e inteligentes muy populares en Rusia.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-bolonka-646c7080de4ad.jpeg?crop=0.804xw:1.00xh;0.104xw,0&resize=980:*",
    },
    {
      "id": 8,
      "title": "Bichón frisé",
      "description": "Los bichones son hipoalergénicos y absolutamente adorables. Con un peso de cerca de 4 kg es un compañero ideal que no ocupa mucho espacio en el sofá. En general, es considerado una de las razas de perros más bonitas.",
      "category": "jewelery",
      "image": "https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/terraza-jardines-porche/razas-pequenas-de-perros-blancos/bichon-frise/1722987-1-esl-ES/bichon-frise.jpg?crop=1xw:0.9377289377289377xh;center,top&resize=980:*",
    },
    {
      "id": 9,
      "title": "Affenpinscher",
      "price": 64,
      "description": "De origen alemán este pequeño es un encanto, pero atención, necesita mucha actividad, prepárate para salir a caminar todos los días.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/affenpinscher-perro-pequeno-negro-1634888680.jpg?crop=0.5714285714285714xw:1xh;center,top&resize=980:*",
    },
    {
      "id": 10,
      "title": "Bulldog francés",
      "description": "Esta raza ha crecido en popularidad ultimamente entre los millennials, pero los Frenchies ya habían sido muy populares en París en el siglo XVIII. Una caminata diaria los mantendrá en forma, y rara vez ladran (tus vecinos lo agradecerán).",
      "image": "https://hips.hearstapps.com/hmg-prod/images/bulldog-frances-1536054163.jpg?crop=1.00xw:0.834xh;0,0.0753xh&resize=980:*",
    },
    {
      "id": 11,
      "title": "Schnauzer",
      "description": "Una raza muy común que gusta mucho entre la gente. Es tranquilo y cariñoso, con ganas de divertirse y ser activo, pero también tiene sus ratos para estar tranquilo en casa. Un animal muy bonito por la suavidad del pelaje.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/miniature-schnauzer-1628804370.jpg?crop=1.00xw:0.834xh;0,0.101xh&resize=980:*",
    },
    {
      "id": 12,
      "title": "Pekinés",
      "description": "Un absoluto perezoso, los perros pequinés quieren un estilo de vida relajado y muchos abrazos. Estos perros también tienen orígenes nobles, su nombre proviene de su origen, en el Palacio Imperial de Pekín (más tarde llamado Beijing).",
      "image": "https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/terraza-jardines-porche/razas-de-perros-mini-mas-bonitas/pekines/1804360-1-esl-ES/pekines.jpg?crop=1xw:0.9377289377289377xh;center,top&resize=980:*",
    },
    {
      "id": 13,
      "title": "Dachshund",
      "description": "Uno de los perros más pequeños y que mejor se adapta a la vida en la ciudad. Además, es muy fotogénico, por lo que vas a poder realizar uno de los diferentes métodos para fotografiar a un perro para que disfrutes de sus poses.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-579267050-653a15ddb03a6.jpg?crop=1xw:1xh;center,top&resize=980:*",
      
    },
    {
      "id": 14,
      "title": "Pug",
      "description": "Los Pug son traviesos pero muy cariñosos. Ten cuidado si vives en un lugar con temperaturas extremas y manten las golosinas bajo control: el gusto de los pugs por la comida y la adicción al sofá los hace propensos a la obesidad. Es una de las razas de perro que no suelan pelo.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/pug-1536055025.jpg?crop=1.00xw:0.834xh;0,0.0918xh&resize=980:*",
    },
    {
      "id": 15,
      "title": "Jack Russell Terrier",
      "description": "Estos pequeños blancos con manchas marrones de pelo corto son muy juguetones y activos. Esta raza se ha hecho un nombre al aparecer en pantalla en la película The Artist. Los Jack Russell Terrier son una raza de perro ideal para personas que viven solas, ademas de ser cachorros muy inteligentes y trabajadores, pero pueden resultar testarudos y extremadamente enérgicos.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/perro-limpieza-patas-1590134020.jpg?crop=0.534xw:1.00xh;0.181xw,0&resize=980:*",
    },
];
  return  (
    <>
        <div className="card products-grid">
        {products.length && 
        products.map((product)=> (<Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                />
        ))}
        </div>
    </>
);
};

export default Products