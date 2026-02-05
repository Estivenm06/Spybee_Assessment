import Image from "next/image";
import Form from "next/form";

import search from "@/public/search.svg";

export const Seeker = () => {
  return (
    <Form action="/search">
      <input placeholder="Buscar" className="input" />
      <button type="submit">
        <Image src={search} width={15} height={15} alt="Search Icon" />
      </button>
    </Form>
  );
};
