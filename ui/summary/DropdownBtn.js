import Image from "next/image"
import PresentationIcon from "@/public/presentation-folder.svg";

import styles from "./summary.module.css";

export const DropDownBtn = ({classContainer, onClick, label}) => {
    return (
                  <div className={classContainer}>
            <button className={styles.summaryBtns} onClick={onClick}>{label}</button>
          </div>
    )
}

export const DropDown = ({ setDropdown, active }) => {
    if(active) return <div className={styles.summaryDropdownContainer}><DropDownBtn label={">"} classContainer={styles.arrowBtnContainer} onClick={setDropdown} /></div>
    return (
        <div className={styles.summaryDropdownContainer}>
                  <DropDownBtn
                    label={"<"}
                    classContainer={styles.arrowBtnContainer}
                    onClick={setDropdown}
                  />
                  <DropDownBtn
                    label={
                      <Image
                        src={PresentationIcon}
                        alt="PresentationIconIcon"
                        className={styles.presentationIcon}
                      />
                    }
                    classContainer={styles.summaryDropdownBtnContainer}
                    onClick={setDropdown}
                  />
              </div>
    )
}