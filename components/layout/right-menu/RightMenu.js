import styles from "./RightMenu.module.css";

const RightMenu = (props) => {
  return (
    <div className={styles.aside_right}>
      <h3>Your List</h3>
      <div className={styles.card}>
        <div className={styles.card_heading}>
          <h6>Reading</h6>
          <h6>To Read</h6>
          <h6>Completed</h6>
        </div>

        <div className={styles.single_card}>
          <img src="404.png" />
          <div className={styles.middle_portion}>
            <span className={styles.wrap_text}>
              Title of the book is very loong
            </span>
            <span className={styles.wrap_text}>
              Authors name is also super duper longggggggg
            </span>
          </div>
          <div className={styles.right_portion}>
            <p>50%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
