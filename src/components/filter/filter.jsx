import {Select} from "@alfalab/core-components/select";

const Filter = ({data, selected, handleChange}) => {
  const optionList = Object.keys(data).length ? Object.keys(data).map(el => {
    return {key: el, content: el}
  }) : []

  return (
    <div className="filter">
      <Select
        placeholder='Choose a country'
        multiple={false}
        options={optionList}
        selected={selected}
        onChange={handleChange}
        label='Country'
        optionsListWidth="content"
      />
    </div>
  )
}

export default Filter;