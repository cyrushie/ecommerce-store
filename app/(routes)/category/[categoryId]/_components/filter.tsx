"use client";

import qs from "query-string";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: Size[] | Color[];
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  console.log(searchParams);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            className={cn(
              "bg-white p-2 text-sm border border-gray-400 text-gray-800 rounded-md",
              selectedValue === filter.id && "text-white bg-black"
            )}
            onClick={() => onClick(filter.id)}
            key={filter.id}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
