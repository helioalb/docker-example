```shell
docker volume create meuvolume
```

```shell
docker volume inspect meuvolume
```

```shell
docker run --rm --name nginx -d --mount type=volume,source=meuvolume,target=/app nginx
```

```shell
docker run -dit --name ubuntu2 ubuntu bash
```

```shell
docker attach ubuntu2
```

## Networks
  - bridge
  - host
  - overlay
  - maclan
  - none

### bridge

```shell
docker network create --driver bridge minharede
```

```shell
docker run -dit --name linux1 --network minharede bash
```

```shell
docker run -dit --name linux2 --network minharede bash
```

```shell
docker run -dit --name linux3 bash
```

```shell
docker network connect minharede linux3
```

### host

```shell
docker run --rm --name nginx --network host nginx
```

### Accessing the docker host

```shell
curl http://host.docker.internal:<port>
```
