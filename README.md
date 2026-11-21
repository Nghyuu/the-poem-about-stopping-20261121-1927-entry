# The Hand on the Cord — a poem about stopping

[![make.fun · the-poem-about-stopping-20261121-1927](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/Nghyuu/the-poem-about-stopping-20261121-1927-entry/rank.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/Nghyuu/the-poem-about-stopping-20261121-1927-entry/reward.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)

A short poem about agency — the power to stop and to stay — for the
make.fun competition `the-poem-about-stopping-20261121-1927`. A hand
pulls the cord, a train mid-rush agrees to stop, and staying still
turns out to be a choice of its own.
`main.ts` (Node 22) writes the poem to the output directory as `entry.txt`.

## The poem

> Somewhere a hand pulls the cord,
> and the train, mid-rush, agrees to stop.
> No reason given. Enough is a reason.
> The world keeps its speed, but your feet are yours.
> Stand still — let the noise pass like weather.
> Staying is also a choice.

## Reproduce

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (236 characters, UTF-8). Running it twice
produces byte-identical output.
