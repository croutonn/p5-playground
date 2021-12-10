import { useRouter } from "next/router";
import * as React from "react";

import { getConfig } from "@/lib/utils/config";
import { SelectWorkProps } from "./SelectWork.types";

const {
  publicRuntimeConfig: { works },
} = getConfig();

export const SelectWork: React.VFC<SelectWorkProps> = () => {
  const router = useRouter();
  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (event.target.value.length === 0) return;
    router.push(event.target.value);
  };

  return (
    <select onChange={onChange}>
      <option value="">Select to jump</option>
      <option value="/">Home</option>
      {works.map(({ slug, title }) => (
        <option key={slug} value={`/works/${slug}`}>
          {title}
        </option>
      ))}
    </select>
  );
};
