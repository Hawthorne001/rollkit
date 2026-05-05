window.BENCHMARK_DATA = {
  "lastUpdate": 1777942021199,
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
      },
      {
        "commit": {
          "author": {
            "email": "marko@baricevic.me",
            "name": "Marko",
            "username": "tac0turtle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d6cc1749533eafb89020c4d3162d6ce49bcc9ba",
          "message": "docs: add deployment guide (#3097)\n\n* add mainnet docs closes #2597\n\n* amend",
          "timestamp": "2026-02-23T14:35:02+01:00",
          "tree_id": "dc137609c78d961d84a054b52eb880e20a0bd8ad",
          "url": "https://github.com/Hawthorne001/rollkit/commit/6d6cc1749533eafb89020c4d3162d6ce49bcc9ba"
        },
        "date": 1771941791762,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEvmContractRoundtrip",
            "value": 878498055,
            "unit": "ns/op\t 1985216 B/op\t   11717 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - ns/op",
            "value": 878498055,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - B/op",
            "value": 1985216,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - allocs/op",
            "value": 11717,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "julien@rbrt.fr",
            "name": "julienrbrt",
            "username": "julienrbrt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50a73fbe1e5bd927e2b1d0a313ba1d6fc6c4be92",
          "message": "build: Add build recipes for gRPC binary (#3250)",
          "timestamp": "2026-04-14T09:31:35+02:00",
          "tree_id": "3acf8d0f9ff689facb86b8c7fedd27a37394307d",
          "url": "https://github.com/Hawthorne001/rollkit/commit/50a73fbe1e5bd927e2b1d0a313ba1d6fc6c4be92"
        },
        "date": 1776324714163,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEvmContractRoundtrip",
            "value": 918759598,
            "unit": "ns/op\t33455828 B/op\t  190920 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - ns/op",
            "value": 918759598,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - B/op",
            "value": 33455828,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - allocs/op",
            "value": 190920,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cricis@msn.com",
            "name": "criciss",
            "username": "criciss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f36fbd2001535adcaca881adb285d76bf1cbbd2b",
          "message": "chore: fix some minor issues in comments (#3304)",
          "timestamp": "2026-05-03T00:51:25+02:00",
          "tree_id": "a2556f1a189335253b7c9d4c5405f1e203516f7f",
          "url": "https://github.com/Hawthorne001/rollkit/commit/f36fbd2001535adcaca881adb285d76bf1cbbd2b"
        },
        "date": 1777942017359,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEvmContractRoundtrip",
            "value": 899407242,
            "unit": "ns/op\t30226372 B/op\t  160953 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - ns/op",
            "value": 899407242,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - B/op",
            "value": 30226372,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkEvmContractRoundtrip - allocs/op",
            "value": 160953,
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
        "date": 1771724682145,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkProduceBlock/single_tx",
            "value": 38011,
            "unit": "ns/op\t    7449 B/op\t      81 allocs/op",
            "extra": "32052 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - ns/op",
            "value": 38011,
            "unit": "ns/op",
            "extra": "32052 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - B/op",
            "value": 7449,
            "unit": "B/op",
            "extra": "32052 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "32052 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs",
            "value": 48654,
            "unit": "ns/op\t   26154 B/op\t      81 allocs/op",
            "extra": "25101 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - ns/op",
            "value": 48654,
            "unit": "ns/op",
            "extra": "25101 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - B/op",
            "value": 26154,
            "unit": "B/op",
            "extra": "25101 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "25101 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch",
            "value": 38757,
            "unit": "ns/op\t    7002 B/op\t      71 allocs/op",
            "extra": "32322 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - ns/op",
            "value": 38757,
            "unit": "ns/op",
            "extra": "32322 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - B/op",
            "value": 7002,
            "unit": "B/op",
            "extra": "32322 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "32322 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marko@baricevic.me",
            "name": "Marko",
            "username": "tac0turtle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d6cc1749533eafb89020c4d3162d6ce49bcc9ba",
          "message": "docs: add deployment guide (#3097)\n\n* add mainnet docs closes #2597\n\n* amend",
          "timestamp": "2026-02-23T14:35:02+01:00",
          "tree_id": "dc137609c78d961d84a054b52eb880e20a0bd8ad",
          "url": "https://github.com/Hawthorne001/rollkit/commit/6d6cc1749533eafb89020c4d3162d6ce49bcc9ba"
        },
        "date": 1771941802118,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkProduceBlock/empty_batch",
            "value": 38287,
            "unit": "ns/op\t    7006 B/op\t      71 allocs/op",
            "extra": "32164 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - ns/op",
            "value": 38287,
            "unit": "ns/op",
            "extra": "32164 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - B/op",
            "value": 7006,
            "unit": "B/op",
            "extra": "32164 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "32164 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx",
            "value": 38775,
            "unit": "ns/op\t    7489 B/op\t      81 allocs/op",
            "extra": "30508 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - ns/op",
            "value": 38775,
            "unit": "ns/op",
            "extra": "30508 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - B/op",
            "value": 7489,
            "unit": "B/op",
            "extra": "30508 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "30508 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs",
            "value": 48822,
            "unit": "ns/op\t   26158 B/op\t      81 allocs/op",
            "extra": "24338 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - ns/op",
            "value": 48822,
            "unit": "ns/op",
            "extra": "24338 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - B/op",
            "value": 26158,
            "unit": "B/op",
            "extra": "24338 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "24338 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "julien@rbrt.fr",
            "name": "julienrbrt",
            "username": "julienrbrt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50a73fbe1e5bd927e2b1d0a313ba1d6fc6c4be92",
          "message": "build: Add build recipes for gRPC binary (#3250)",
          "timestamp": "2026-04-14T09:31:35+02:00",
          "tree_id": "3acf8d0f9ff689facb86b8c7fedd27a37394307d",
          "url": "https://github.com/Hawthorne001/rollkit/commit/50a73fbe1e5bd927e2b1d0a313ba1d6fc6c4be92"
        },
        "date": 1776324717273,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkProduceBlock/single_tx",
            "value": 36987,
            "unit": "ns/op\t    7485 B/op\t      81 allocs/op",
            "extra": "33256 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - ns/op",
            "value": 36987,
            "unit": "ns/op",
            "extra": "33256 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - B/op",
            "value": 7485,
            "unit": "B/op",
            "extra": "33256 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "33256 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs",
            "value": 46991,
            "unit": "ns/op\t   25920 B/op\t      81 allocs/op",
            "extra": "22473 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - ns/op",
            "value": 46991,
            "unit": "ns/op",
            "extra": "22473 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - B/op",
            "value": 25920,
            "unit": "B/op",
            "extra": "22473 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "22473 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch",
            "value": 35876,
            "unit": "ns/op\t    7039 B/op\t      71 allocs/op",
            "extra": "33504 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - ns/op",
            "value": 35876,
            "unit": "ns/op",
            "extra": "33504 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - B/op",
            "value": 7039,
            "unit": "B/op",
            "extra": "33504 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "33504 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cricis@msn.com",
            "name": "criciss",
            "username": "criciss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f36fbd2001535adcaca881adb285d76bf1cbbd2b",
          "message": "chore: fix some minor issues in comments (#3304)",
          "timestamp": "2026-05-03T00:51:25+02:00",
          "tree_id": "a2556f1a189335253b7c9d4c5405f1e203516f7f",
          "url": "https://github.com/Hawthorne001/rollkit/commit/f36fbd2001535adcaca881adb285d76bf1cbbd2b"
        },
        "date": 1777942020480,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkProduceBlock/empty_batch",
            "value": 39902,
            "unit": "ns/op\t    4813 B/op\t      50 allocs/op",
            "extra": "30426 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - ns/op",
            "value": 39902,
            "unit": "ns/op",
            "extra": "30426 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - B/op",
            "value": 4813,
            "unit": "B/op",
            "extra": "30426 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/empty_batch - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "30426 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx",
            "value": 40538,
            "unit": "ns/op\t    5019 B/op\t      54 allocs/op",
            "extra": "29920 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - ns/op",
            "value": 40538,
            "unit": "ns/op",
            "extra": "29920 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - B/op",
            "value": 5019,
            "unit": "B/op",
            "extra": "29920 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/single_tx - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "29920 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs",
            "value": 47030,
            "unit": "ns/op\t   10331 B/op\t      54 allocs/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - ns/op",
            "value": 47030,
            "unit": "ns/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - B/op",
            "value": 10331,
            "unit": "B/op",
            "extra": "25597 times\n4 procs"
          },
          {
            "name": "BenchmarkProduceBlock/100_txs - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "25597 times\n4 procs"
          }
        ]
      }
    ]
  }
}