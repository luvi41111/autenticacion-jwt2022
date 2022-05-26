import { test } from '@japa/runner'

test('display welcome page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  //response.assertBodyContains({ hello: 'world' })
})

test('dividir', async ({ client }) => {
  const responsefalse = await client.post('/dividir')

  responsefalse.assertStatus(400);
  const responsetrue =await client
    .post('/dividir')
    .json({

      "a": 2,
      "b":2
    });
    responsetrue.assertStatus(200);
 // responsetrue.assertBodyContains({ msg: ' la operacion se ha realizado exitosamente' })
  console.log(responsetrue.status());
})



