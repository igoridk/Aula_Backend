import fastify from 'fastify'
import 'dotenv/config'

const app = fastify()

function calcularidade(ano: number) {
    const anoatual = new Date().getFullYear()
    const idade = anoatual - ano
    return idade
}

app.get<{ Params: { ano: string } }>('/hello/:ano', async (request, reply) => {
    const { ano } = request.params

    const idade = calcularidade(Number(ano))

    return { idade }
})

app.listen({ port: Number(process.env.PORT) }).then(() => {
    console.log('Rodando na porta ' + process.env.PORT)
})