import { Container } from './styles';
import { Tag } from "../Tag";
import { Stars } from "../Stars";

export function Movie({data, ...rest}) {

  return(
    <Container {...rest} >
      <h1>{data.title}</h1>
      <Stars size={12} rating={data.rating}/>
      <p>
        {data.description}
      </p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag=> <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>

  )

}