const TemplateExpression = () => {
    const name = "Kamila"
    const data = {
        age: 28,
        job: 'Dev FullStack',
    }
    return (
        <>
        <h3>Olá {name}, tudo bem?</h3>
        <p>Você atua como: {data.job}</p>
        <p>{4+4}</p> 
        </>
    )
}

export default TemplateExpression