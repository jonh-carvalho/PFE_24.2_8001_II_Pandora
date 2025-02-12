
import choripane1 from '../images/restaurante/choripane1.jpg'
import choripapas from '../images/restaurante/choripapas.jpeg'
import empanadaa from '../images/restaurante/empanada-a.png'
import empanadaq from '../images/restaurante/empanada-q.jpeg'
import empanadac from '../images/restaurante/empanada-c.jpg'
import thenash from '../images/restaurante/nash-thenash.jpg'
import nashbalde from '../images/restaurante/baldenash.jpeg'
import undernash from '../images/restaurante/nash-under.jpeg'
import choribacon from '../images/restaurante/chori-bacon-01.jpg'

function Restaurantes(){
    return (
        <>
        <div className='grid-res'>
        <div className="topo-res">
            Confira as opções de restaurantes presentes no festival
        </div>
        <div className='restaurantes-conteiner'>
            <div className='nome-res'>
                Chimi
            </div>
            <div className='item-res1'>
                <h1 className='item-res-nome'>Choripán pimentão</h1>
                <p className='item-res-desc'>cachorro quente com queijo e condimentos</p>
                <img src={choripane1} alt='choripán do restaurante Chimi' className='item-res-img'/>
            </div>
            <div className='item-res2'>
                <h1 className='item-res-nome'>Chori bacon smash</h1>
                <p className='item-res-desc'>Porção de batatas com linguiça suína e maionese</p>
                <img src={choribacon} alt='porção de batata chori bacon smash do restaurante Chimi' className='item-res-img'/>
            </div>
            <div className='item-res3'>
                <h1 className='item-res-nome'>Choripapas</h1>
                <p className='item-res-desc'>100g de linguiça suína, queijo cheddar, e bacon artesanal</p>
                <img src={choripapas} alt='hamburger choripas do restaurante Chimi' className='item-res-img'/>
            </div>
        </div>
        <br />
        <div className='restaurantes-conteiner'>
            <div className='nome-res'>
                Juanito's
            </div>
            <div className='item-res1'>
                <h1 className='item-res-nome'>Empanada artesanal</h1>
                <p className='item-res-desc'>Empanada com até 3 recheios</p>
                <img src={empanadaa} alt='empanada artesanal do restaurante Juanito' className='item-res-img'/>
            </div>
            <div className='item-res2'>
                <h1 className='item-res-nome'>Empanada quatro queijos</h1>
                <p className='item-res-desc'>queijo provolone, mussarela, cheddar e gorgonzola</p>
                <img src={empanadaq} alt='empanada quatro queijos do restaurante Juanito' className='item-res-img'/>
            </div>
            <div className='item-res3'>
                <h1 className='item-res-nome'>Empanada de chorizo</h1>
                <p className='item-res-desc'>Empanada aberta com recheio de chorizo</p>
                <img src={empanadac} alt='empanada de chorizo do restaurante Juanito' className='item-res-img'/>
            </div>
        </div>
        <br />
        <div className='restaurantes-conteiner-ultimo'>
            <div className='nome-res'>
                Nash
            </div>
            <div className='item-res1'>
                <h1 className='item-res-nome'>The nash</h1>
                <p className='item-res-desc'>Frango frito, coleslaw (saladinha de repolho) e picles</p>
                <img src={thenash} alt='Hamburger the nash do restaurante Nash' className='item-res-img'/>
            </div>
            <div className='item-res2'>
                <h1 className='item-res-nome'>Balde de fritos</h1>
                <p className='item-res-desc'> 6 tiras de frango com picles e coleslaw com molho artesanal</p>
                <img src={nashbalde} alt='Blade de frango do restaurante Nash' className='item-res-img'/>
            </div>
            <div className='item-res3'>
                <h1 className='item-res-nome'>Under nash</h1>
                <p className='item-res-desc'>Brioche, maionese, parmesão e coentro e sobrecoxa </p>
                <img src={undernash} alt='Hamburger Under the nash do restaurante Nash' className='item-res-img'/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Restaurantes;