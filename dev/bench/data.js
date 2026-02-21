window.BENCHMARK_DATA = {
  "lastUpdate": 1771659674982,
  "repoUrl": "https://github.com/Hawthorne001/rollkit",
  "entries": {
    "EVM Contract Roundtrip": [
      {
        "commit": {
          "author": {
            "email": "github.qpeyb@simplelogin.fr",
            "name": "Cian Hatton",
            "username": "chatton"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef3469a5ae53ef41b58f741a17343d1ef4a900be",
          "message": "feat: adding spamoor test (#3091)\n\n* feat: introduce EVM contract benchmarking with new tests and a GitHub Actions workflow.\n\n* Capture otel\n\n* wip: basic spamoor test running and reporting metrics\n\n* chore: adding trance benchmark e2e\n\n* wip: experimenting with gas burner tx\n\n* wip\n\n* chore: adding basic spamoor test\n\n* chore: remove local pin\n\n* chore: adding basic assertion\n\n* fix linter\n\n* chore: fix indentation\n\n---------\n\nCo-authored-by: Alex Peters <alpe@users.noreply.github.com>",
          "timestamp": "2026-02-19T12:07:32Z",
          "tree_id": "4f2196dc31f4d710af0f5c5579b893ad6c135ca4",
          "url": "https://github.com/Hawthorne001/rollkit/commit/ef3469a5ae53ef41b58f741a17343d1ef4a900be"
        },
        "date": 1771595315272,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEvmContractRoundtrip",
            "value": 852374534,
            "unit": "ns/op\t 1908528 B/op\t   11434 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - ns/op",
            "value": 852374534,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - B/op",
            "value": 1908528,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - allocs/op",
            "value": 11434,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alpe@users.noreply.github.com",
            "name": "Alexander Peters",
            "username": "alpe"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ce69eed18a39e6851f362f27797e1e188e91af",
          "message": "test: phase1 benchmarks (#3081)\n\n* Introduce phase1 benchmark\n\n* Bench refactor\n\n* bench: fix monotonically-increasing timestamp + add 100-tx case",
          "timestamp": "2026-02-19T17:20:33+01:00",
          "tree_id": "3d5412d9ac6ef97e584e4dc4bdea730e21f02545",
          "url": "https://github.com/Hawthorne001/rollkit/commit/05ce69eed18a39e6851f362f27797e1e188e91af"
        },
        "date": 1771659674140,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEvmContractRoundtrip",
            "value": 853002734,
            "unit": "ns/op\t 1949236 B/op\t   11470 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - ns/op",
            "value": 853002734,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - B/op",
            "value": 1949236,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - allocs/op",
            "value": 11470,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      }
    ]
  }
}