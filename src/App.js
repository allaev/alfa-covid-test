import {useState, useEffect} from "react";
import {Divider} from '@alfalab/core-components/divider';
import {Spinner} from '@alfalab/core-components/spinner';

import Header from './components/header/header';
import Filter from './components/filter/filter';
import InfoList from './components/info-list/info-list';

import "./App.scss";

function App() {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = ({selected}) => {
    setSelected(selected.content);
  };  

  useEffect(() => {
    fetch("https://covid-api.mmediagroup.fr/v1/cases")
      .then(res => res.json())
      .then(dat => {
        setIsLoading(false);
        setData(dat);
      });
  }, []);

  return (
    <div className="App">
      <Header headerText="😷 COVID-19 cases info"/>
      <Divider/>
      <div className="content">
        <Spinner size='m' visible={isLoading} />
        {
          !isLoading && (
            <Filter
              data={data}
              selected={selected}
              handleChange={handleChange}
            />
          )
        }
        {
          selected.length ? <InfoList infoData={data[selected].All}/>: null
        }
      </div>
    </div>
  );
}

export default App;
