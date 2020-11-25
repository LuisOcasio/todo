import styled from "styled-components";







const Flag = () => {
return (
<FlagContainer> 
    <div style={squareContainer}>
        <div style={square}/>

        
            <div style={stripes}>
                <div style={red}/>
                <div style={superLightBlue}/>
                <div style={red}/>
                <div style={superLightBlue}/>
                     
            </div>
        
    </div>
    <div style={stripes}>
        <div style={red}/>
        <div style={superLightBlue}/>
        <div style={red}/>
        <div style={superLightBlue}/>
             
    </div>

</FlagContainer> 
)
}

export default Flag;

const Red = styled.div`
height: 100px;
width: 100%;
background-color: #C82D35;
`
const SuperLightBlue = styled.div`
height: 100px;
width: 100%;
background-color: #EAFFF9;
`

const Red2 = styled.div`
height: 100px;
width: 50%;
background-color: #C82D35;
`
const SuperLightBlue2 = styled.div`
height: 100px;
width: 50%;
background-color: #EAFFF9;
`

const SquareContainer = styled.div`
display: flex;
flex-direction: row;
`

const Square = styled.div`
height: 400px;
width: 35%;
background: #1E3453;
`
const Stripes = styled.div`
display: flex;
flex-direction: column;
`
const Stripes2 = styled.div`
display: flex;
flex-direction: column;
`

const FlagContainer = styled.div`
display: flex;
flex-direction: column;
`

const SquareBox = styled.div``



const stripes = {
    display: 'flex',
    flexDirection: 'column', 
    width: '100%'
}

const red = {
    height: '100px',
    width: '100%',
    backgroundColor: '#C82D35'
}

const superLightBlue = {
    height: '100px',
    width: '100%',
    backgroundColor: '#EAFFF9'
}

const square = {
    height: '400px',
    width: '67%',
    backgroundColor: '#1E3453'
}

const squareContainer = {
    display: 'flex',
    flexDirection: 'row'
}

