# Desafio Go

Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:

docker run <seu-user>/codeeducation

Temos que ter o seguinte resultado: Code.education Rocks!

Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

Dica: No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utilizá-la.

Divirta-se

# Solução

A imagem foi gerada usando Multistage Building para otimizar o tamanho final.

O primeiro passo é a compilação da aplicação, na qual foi utilizada a imagem base `golang:1.15-alpine`. O código fonte é então copiado para o container e compilado com as flags `-s` e `-w`, deixando o binário ainda menor.

O passo final usa a imagem `scrach`, que uma é imagem vazia, fazendo com que a imagem final tenha somente o binário compilado, que é copiado do passo anterior para o `WORKDIR` final.
A imagem final possui tamanho `1.39MB` quando instalada, enquanto o tamanho comprimido no DockerHub é `565.62KB`.

O seguinte comando é usado para gerar a imagem:

```
docker build -t leandrorondon/fullcycle-docker-go .
```

# Instruções

A imagem pode ser executada com o comando:

```
docker run --rm leandrorondon/fullcycle-docker-go
```
