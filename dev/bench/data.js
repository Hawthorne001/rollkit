window.BENCHMARK_DATA = {
  "lastUpdate": 1771724673475,
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
          "id": "ce184847d2e3a610967f70b27ddae3e075b77e97",
          "message": "perf: optimize block creation (#3093)\n\n* Introduce phase1 benchmark\n\n* Bench refactor\n\n* bench: fix monotonically-increasing timestamp + add 100-tx case\n\n* shot1\n\n* x\n\n* y\n\n* cgo\n\n* z\n\n* Revert proto changes and interface\n\n* Remove unecessay caches\n\n* Save pending\n\n* test: add 100-transaction benchmark for block production and simplify executor comments.\n\n* refactor: remove `ValidateBlock` method and simplify state validation logic.\n\n* Extract last block info",
          "timestamp": "2026-02-20T15:47:35+01:00",
          "tree_id": "d590f22cec34019392dd991cf9c67b2c8d67b1f7",
          "url": "https://github.com/Hawthorne001/rollkit/commit/ce184847d2e3a610967f70b27ddae3e075b77e97"
        },
        "date": 1771724672293,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEvmContractRoundtrip",
            "value": 852562707,
            "unit": "ns/op\t 1953400 B/op\t   11668 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - ns/op",
            "value": 852562707,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - B/op",
            "value": 1953400,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - allocs/op",
            "value": 11668,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      }
    ],
    "Block Executor Benchmark": [
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
        "date": 1771659682882,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkProduceBlock/100_txs",
            "value": 144460,
            "unit": "ns/op\t   46991 B/op\t     277 allocs/op",
            "extra": "7582 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - ns/op",
            "value": 144460,
            "unit": "ns/op",
            "extra": "7582 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - B/op",
            "value": 46991,
            "unit": "B/op",
            "extra": "7582 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - allocs/op",
            "value": 277,
            "unit": "allocs/op",
            "extra": "7582 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch",
            "value": 125864,
            "unit": "ns/op\t   10815 B/op\t     154 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - ns/op",
            "value": 125864,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - B/op",
            "value": 10815,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - allocs/op",
            "value": 154,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx",
            "value": 120585,
            "unit": "ns/op\t   11409 B/op\t     170 allocs/op",
            "extra": "9498 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - ns/op",
            "value": 120585,
            "unit": "ns/op",
            "extra": "9498 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - B/op",
            "value": 11409,
            "unit": "B/op",
            "extra": "9498 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - allocs/op",
            "value": 170,
            "unit": "allocs/op",
            "extra": "9498 times\n4 procs"
          }
        ]
      }
    ]
  }
}