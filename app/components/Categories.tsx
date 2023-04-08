"use client";
import React from "react";
import Container from "./Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import CategoryBox from "./CategoriesBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "this property close to beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "this property close to windmill",
  },
  {
    label: "modern",
    icon: MdOutlineVilla,
    description: "this property is modern",
  },
  {
    label: "country side",
    icon: TbMountain,
    description: "this property is in country side",
  },
  {
    label: "pools",
    icon: TbPool,
    description: "this property has pool",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "this property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this property is  close to lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this property is on an island",
  },
  {
    label: "Castels",
    icon: GiCastle,
    description: "this property is in castel",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "this property is  close to camping place",
  },
  {
    label: "Artic",
    icon: BsSnow,
    description: "this property is in snow island",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "this property is in cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "this property is in desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "this property is in barns",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "this property is luxurius",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) return null;
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
