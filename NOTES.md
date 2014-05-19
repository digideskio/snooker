# GET /games/1.json

{
  timestamp: "2014-01-01T12:00:00",
  players: [
    { name: "Craig", score: 0, target: 31 },
    { name: "Laurence", score: 0, target: 31 },
    { name: "Michael", score: 0, target: 31 },
    { name: "Steve", score: 0, target: 31 }
  ],
  turns: [
    {
      timestamp: "2014-01-01T12:01:00",
      player: "Craig",
      events: ["canon", "yellow", "green", "brown", "blue", "pink", "black", "foul"]
    },
    {
      timestamp: "2014-01-01T12:02:00",
      player: "Steve",
      events: ["canon", "yellow", "green", "brown", "blue", "pink", "black", "foul"]
    }
  ]
}
