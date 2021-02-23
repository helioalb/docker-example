```shell
docker build -t helioalb/laravel:prod . -f Dockerfile.prod
```

```shell
docker network create laranet
```

```shell
docker run -d --network laranet --name laravel helioalb/laravel:prod
```

```shell
docker run -d --network laranet --name laravel helioalb/nginx:prod
```

