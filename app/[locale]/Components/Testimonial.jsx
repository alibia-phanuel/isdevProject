"use client";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
function Testimonial() {
  const Tablo = [
    {
      img: "/pp1.jpg",
    },
    {
      img: "/pp4.jpg",
    },
    {
      img: "/pp5.jpg",
    },
    {
      img: "/pp7.jpg",
    },
    {
      img: "/pp2.jpg",
    },
    {
      img: "/pp1.jpg",
    },
    {
      img: "/pp3.jpg",
    },
  ];
  const Testimonial_data = [
    {
      img: "/pp1.jpg",
      content_text:
        "Je suis ravie de mon expérience avec votre service. Le professionnalisme et la rapidité d'exécution sont impressionnants. Je recommande vivement !",
      name: "Marie L.",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp4.jpg",
      content_text:
        "Une équipe à l'écoute et des résultats à la hauteur de mes attentes. Merci pour votre excellent travail. Je reviendrai sans hésiter.",
      name: "Jeane",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp5.jpg",
      content_text:
        "La qualité du service est exceptionnelle. J'ai été accompagnée du début à la fin avec beaucoup de sérieux. Bravo à toute l'équipe !",
      name: "Sophie T.",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp7.jpg",
      content_text:
        "Je suis très satisfait de ma commande. Le produit est conforme à la description et la livraison a été rapide. Une très bonne expérience client.",
      name: "Luc H.",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp2.jpg",
      content_text:
        "Une entreprise sérieuse et professionnelle. Le travail a été réalisé avec beaucoup de soin et d'attention. Je suis très satisfait du résultat final.",
      name: "Elisa D.",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp1.jpg",
      content_text:
        "Le service client est exemplaire. J'ai eu une réponse rapide à toutes mes questions et mes besoins ont été parfaitement pris en compte. Merci beaucoup !",
      name: "arsene",
      text_block: "Projet manager microsoft",
    },
    {
      img: "/pp3.jpg",
      content_text:
        "Excellente prestation ! Le résultat est au-delà de mes espérances. Je recommanderai vos services à mon entourage sans hésiter.",
      name: "yolo",
      text_block: "Projet manager microsoft",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = Testimonial_data.length;
  const Previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const Next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <>
      <div className="w-full z-auto flex justify-between md:px-[10%] py-10 max-md:flex-wrap max-md:flex-col-reverse">
        <div className=" w-[100%] p-10 flex  shadow-lg z-[100] rounded-lg testimonial justify-between">
          <div>
            <h1 className="font-bold text-2xl max-[500]:text-xl capitalize">
              satisfaction des clients
            </h1>
            {Testimonial_data.map(
              (item, index) =>
                index === current && (
                  <div key={item.name}>
                    <div className="pb-[20px] flex"></div>
                    <div className="my-[50px] text-lg max-w-2xl max-[500px]:text-sm text-justify z-50">
                      <h2>{item.content_text}</h2>
                    </div>
                    <div className="flex flex-col gap-y-12">
                      <div className="flex gap-4 items-center ">
                        <div className="w-[100px] h-[100px] bg-slate-300 rounded-full  relative shadow-lg  border-2 border-blue-600">
                          <Image
                            src={item.img}
                            fill
                            alt="photo de profile"
                            className="rounded-full"
                          />
                        </div>
                        <div className=" capitalize">
                          <h6 className="font-bold">{item.name}</h6>
                          <span>client</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div
                          onClick={Next}
                          className="w-[40px] h-[40px] relative  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white rounded-full my-2 shadow-lg cursor-pointer flex justify-center items-center"
                        >
                          <GoArrowLeft className="text-[30px]" />
                        </div>
                        <div
                          onClick={Previous}
                          className="w-[40px] h-[40px]  rotate-180 relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white rounded-full my-2 shadow-lg cursor-pointer flex justify-center items-center"
                        >
                          <GoArrowLeft className="text-[30px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="w-full z-50  flex justify-between relative">
            <div className="img  w-full h-full  rounded-lg mr-[100px] relative flex  justify-center items-center">
              <Image
                src="/particul.png"
                width={1000}
                height={100}
                alt="banner"
              />
            </div>
            <div className="client bg-transparent absolute w-full h-full flex justify-center items-center  flex-wrap gap-2   max-md:overflow-y-scroll mx-2 container-snap ">
              {Tablo.map((item, index) => (
                <div
                  key={item.name}
                  className="w-[110px] h-[110px]  rounded-full  relative gap-4 max-sm:h-[100px] max-sm:w-[100px] shadow-lg  border-2 border-orange-600 "
                >
                  <Image
                    src={item.img}
                    fill
                    alt="photo de profile"
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
