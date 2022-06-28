const Text = ({
  text,
  textWeight,
  textSize,
  spanText,
  spanWeight,
  spanSize,
}) => {
  return (
    <p style={{ fontWeight: textWeight }}>
      <span style={{ fontSize: spanSize, fontWeight: spanWeight }}>
        {spanText && spanText}
      </span>
      {text && text}
    </p>
  )
}

export default Text
