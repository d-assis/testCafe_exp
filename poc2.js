//importa bibliotecas e funcionalidades do framework
import { Selector } from 'testcafe';

// abrir agrupador de casos de teste
fixture `desafio IEQ`
    // visitar página onde ocorrerá o teste
    .page `https://investiremque.com.br/`

    // abrir agrupador do caso de teste
    test('verificar título', async t => {

        //selecionar e verificar tag title
        await t
            .expect(Selector('title').innerText).eql('Investir em Quê?')
    })

    test('verificar descrição', async t => {
        await t
            .expect(Selector('meta[name="description"]').content).eql('Busque e compare fundos de investimento de todo o mercado de forma gratuita. Veja quanto seu dinheiro pode render com os cenários de projeção de rentabilidade.')
    })

