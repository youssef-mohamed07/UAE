import Accordion, { AccordionItem } from "./Accordion";

function Questions() {
  return (
    <div className='bg-[url("/assets/questions.png.png")] bg-cover bg-center px-4 text-white py-8 md:py-14'>
      <div className="text-center md:text-[20px] lg:text-[35px] font-extrabold mb-7">
        <h2>Frequently Asked Questions</h2>
        <div className="bg-[#f05b1f] rounded-[4px] mx-auto mt-2 h-[1px] w-[20%]"></div>
      </div>
      <Accordion className="max-w-l flex items-center flex-col">
        <AccordionItem
          value="1"
          trigger="Documents required to ship cars from the Emirates to Egypt (tourist - Tarbtic)?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          architecto natus fugiat assumenda labore qui doloribus. Corrupti illum
          nesciunt quis corporis voluptatum, ea, fugit fuga incidunt iste
          tempore quas?
        </AccordionItem>
        <AccordionItem
          value="2"
          trigger="Documents required for shipping cars under the special needs system?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          architecto natus fugiat assumenda labore qui doloribus. Corrupti illum
          nesciunt quis corporis voluptatum, ea, fugit fuga incidunt iste
          tempore quas?
        </AccordionItem>
        <AccordionItem
          value="3"
          trigger="Documents required to ship boats from the UAE to Saudi Arabia?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          architecto natus fugiat assumenda labore qui doloribus. Corrupti illum
          nesciunt quis corporis voluptatum, ea, fugit fuga incidunt iste
          tempore quas?
        </AccordionItem>
        <AccordionItem
          value="4"
          trigger="Documents required to ship cars from the UAE to Saudi Arabia?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          architecto natus fugiat assumenda labore qui doloribus. Corrupti illum
          nesciunt quis corporis voluptatum, ea, fugit fuga incidunt iste
          tempore quas?
        </AccordionItem>
        <AccordionItem
          value="5"
          trigger="Documents required to ship boats from the UAE to Saudi Arabia?"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          architecto natus fugiat assumenda labore qui doloribus. Corrupti illum
          nesciunt quis corporis voluptatum, ea, fugit fuga incidunt iste
          tempore quas?
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Questions;
