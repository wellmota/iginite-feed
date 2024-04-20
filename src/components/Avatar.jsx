import styles from "./Avatar.module.css"

export const Avatar = ({ hasBorder = true, src }) => {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}
