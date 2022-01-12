function Checkboxes(props) {
  const answersSet = {
    colour: "It's yellow!",
    sound: "It squeaks!",
    logo: "It has a logo!",
    size: "Its big!",
  };

  function handleOnChange(e) {
    let clickedItems = [
      ...document.querySelectorAll(`input[name="${props.name}"]`),
    ]
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    props.setFormData({ ...props.formData, [props.name]: clickedItems });
  }
  return (
    <ul>
      {Object.keys(answersSet).map((item) => (
        <li key={item}>
          <label>
            <input
              onChange={handleOnChange}
              name={props.name}
              type="checkbox"
              value={item}
            />
            {`${answersSet[item]}`}
          </label>
        </li>
      ))}
    </ul>
  );
}
export default Checkboxes;
