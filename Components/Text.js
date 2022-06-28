const Text = ({
  text,
  textWeight,
  textSize,
  spanText,
  spanWeight,
  spanSize,
  otherStyles,
}) => {
  return (
    <p
      style={{
        fontWeight: textWeight,
        fontSize: textSize,
        ...otherStyles,
      }}
    >
      <span style={{ fontSize: spanSize, fontWeight: spanWeight }}>
        {spanText && spanText}
      </span>
      {text && text}
    </p>
  )
}

export default Text
