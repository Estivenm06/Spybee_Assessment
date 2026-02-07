import Image from "next/image"
import PresentationIcon from "@/public/presentation-folder.svg";

export const DropDownBtn = ({classContainer, onClick, label}) => {
    return (
                  <div className={classContainer}>
            <button className="summaryBtns" onClick={onClick}>{label}</button>
          </div>
    )
}

export const DropDown = ({ setDropdown, active }) => {
    if(active) return <div className="summaryDropdownContainer"><DropDownBtn label={">"} classContainer={"arrowBtnContainer"} onClick={setDropdown} /></div>
    return (
        <div className="summaryDropdownContainer">
                  <DropDownBtn
                    label={"<"}
                    classContainer={"arrowBtnContainer"}
                    onClick={setDropdown}
                  />
                  <DropDownBtn
                    label={
                      <Image
                        src={PresentationIcon}
                        alt="PresentationIconIcon"
                        className="presentationIcon"
                      />
                    }
                    classContainer={"summaryDropdownBtnContainer"}
                    onClick={setDropdown}
                  />
              </div>
    )
}