import Image from "next/image";

export const Card = () => {
  return (
    <>
      <Image className="dataImage" alt="This is some image" src={spyBeeLogo} />
      <div className="dataTitleContainer">
        <h3 className="dataTitle">{mockData[0].title}</h3>
        <p className="dataSub">
          {dateFormat(mockData[0].lastVisit)}{" "}
          <span>{dateFormat(mockData[0].lastUpdated)}</span>
        </p>
      </div>
    </>
  );
};
