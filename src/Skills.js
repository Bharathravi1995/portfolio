const skillsList = [
  {
    icon: "https://img.icons8.com/color/48/undefined/javascript--v1.png",
    label: "Javascript"
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/html-5--v1.png",
    label: "HTML"
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/css3.png",
    label: "CSS"
  },
  {
    icon: "https://img.icons8.com/plasticine/100/undefined/react.png",
    label: "React"
  },
  {
    icon:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6I3VuZGVmaW5lZDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YwNWUxYiI+PHBhdGggZD0iTTk2LjgzMzk4LDQyLjk4OTVjLTAuNzU1MDIsLTAuMDE5ODIgLTEuNTE1MDgsMC4xMzkzMyAtMi4yNjc1OCwwLjQwOTQyYy00LjU2ODc1LDEuODE2NzUgLTYuMzE5ODIsNC41MTQxNiAtNi4zMTk4Miw0LjUxNDE2YzAsMCAtNS45MTUwMiw4LjY3NDI0IC03LjI4NTY1LDIxLjU0MTk5Yy0wLjIyMDM4LDIuMDY5MzcgLTAuNDUwOTksNC4xOTY0NSAtMC42OTI4Nyw2LjMzMDMyYy0xLjI2ODUsMTAuNzYwNzUgLTIuNjg3NSwyMS4zODQ1MiAtMi42ODc1LDIxLjM4NDUyYzAsMCAtMi44MjA2MiwyLjY3Mzk4IC01LjQyNzQ5LDIuODAyOThjLTIuNjA2ODgsMC4xMjkgLTEuNDU5MjMsLTcuNTE2NiAtMS40NTkyMywtNy41MTY2YzAsMCAyLjAyNDAyLC0xMS40MjMxMyAxLjg4OTY1LC0xMy4zODUwMWMtMC4xMzQzNywtMS45NjE4OCAtMC4zMDE1LC0zLjAzOTA2IC0yLjY2NjUxLC0zLjcxNjMxYy0yLjM5MTg3LC0wLjcwNDEzIC00Ljk3NjA3LDIuMjQ2NTggLTQuOTc2MDcsMi4yNDY1OGMwLDAgLTYuODUxODYsOS44ODk3NSAtNy40NDMxMSwxMS40MzIzN2wtMC4zNDY0NCwwLjYyOTg5bC0wLjM0NjQzLC0wLjQxOTkyYzAsMCA0LjgzMjQ2LC0xMy43OTQ3NyAwLjIwOTk2LC0xNC4wMDQ0Yy00LjYyMjUsLTAuMjA5NjMgLTcuNjUzMDgsNC45MjM1OSAtNy42NTMwOCw0LjkyMzU4YzAsMCAtNS4yNzU0OCw4LjU4NTcyIC01LjQ5MDQ4LDkuNTUzMjJsLTAuMzM1OTQsLTAuNDA5NDJjMCwwIDIuMTc4NTUsLTkuNTkwMDEgMS43MjE2OCwtMTIuMDUxNzZjLTAuNDMsLTIuNDYxNzUgLTIuODIzOTgsLTEuOTYzMTMgLTIuODIzOTgsLTEuOTYzMTRjMCwwIC0zLjAzMTQyLC0wLjMzODAzIC0zLjgxMDc5LDEuNTQzMjJjLTAuNzc5MzgsMS44ODY2MyAtMy42ODE4NywxNC4wNjczOCAtNC4wMzEyNSwxOC4wOTg2M2MwLDAgLTcuNTc3OTEsNS4yODQ2NCAtMTIuNTc2NjYsNS4zMzMwMWMtNC45NzE4OCwwLjA4MDYyIC00LjQ5MzE2LC0zLjA4NjQzIC00LjQ5MzE2LC0zLjA4NjQzYzAsMCAxOC4yNzg3OCwtNS45MDcwNCAxMy4yODAwMywtMTcuOTIwMTZjLTIuMjMwNjMsLTMuMDkwNjMgLTQuODQyNTQsLTQuMDU4NjMgLTguNTI0NDEsLTQuMDEwMjZjLTMuNjgxODcsMC4wODA2MiAtOC4xNDAxOSwyLjA2ODc5IC0xMS4wOTY0NCw4LjUzNDkxYy0xLjQyNDM3LDMuMDkwNjIgLTEuODMwODYsNi4wMTU3MiAtMi4wOTk2MSw4LjI0MDk3YzAsMCAtMy4zMDI2OSwwLjYzMDg5IC01LjA0OTU2LC0wLjc1NTg2Yy0xLjc0Njg4LC0xLjM4Njc1IC0yLjY4NzUsMCAtMi42ODc1LDBjMCwwIC0zLjAxNDYyLDMuNjYzNzMgLTAuMDMxNDksNC43ODcxMWMyLjk4MzEzLDEuMTIzMzcgNy41NTg1OSwxLjU5NTcgNy41NTg1OSwxLjU5NTdjMC40MywxLjk2MTg4IDEuNjY4NzcsNS4wOTcxOCA1LjI3MDAyLDcuNzY4NTVjNS40Mjg3NSw0LjAwNDM4IDE1Ljc5OTU2LC0wLjMzNTk0IDE1Ljc5OTU2LC0wLjMzNTk0bDQuMjcyNzEsLTIuMjk5MDdjMCwwIDAuMTM2ODksMy44MTg5NCAzLjI1NDM5LDQuMzY3MTljMy4xMTc1LDAuNTQ4MjUgNC40MDMzLDAuMjYzMjEgOS44MDUxOCwtMTIuNTM0NjdjMy4xNzEyNSwtNi41NDEzOCAzLjM5MDg3LC02LjE3Mjg1IDMuMzkwODcsLTYuMTcyODVsMC4zNDY0NCwtMC4wODM5OGMwLDAgLTIuNDQxODUsMTIuMjU2MDkgLTEuNTAxMjIsMTUuNjMxNTljMC45NDA2MywzLjM0ODYzIDUuMDQ5NTYsMi45ODE0NSA1LjA0OTU2LDIuOTgxNDVjMCwwIDIuMjMwNjIsMC42MjI0MSA0LjAzMTI1LC01LjU1MzQ3YzEuODAwNjIsLTYuMTc1ODcgNS4yNzAwMiwtMTMuMDU5NTcgNS4yNzAwMiwtMTMuMDU5NTdoMC40MzA0MmMwLDAgLTEuNTEzNCwxMi41OTY0IDAuNzk3ODUsMTYuNjgxNGMyLjMxMTI1LDQuMDg1IDguMzAzOTYsMS4zODU3NCA4LjMwMzk2LDEuMzg1NzRjMCwwIDQuMTk0NiwtMi4wNDgxMyA0LjgzOTYsLTIuNjc3YzAsMCA0Ljk3NDM5LDQuMTM4MjUgMTEuOTg4NzcsMy4zODAzOGMxNS42NjgxMywtMy4wMSAyMS4yNTg1NCwtNi43ODE3NCAyMS4yNTg1NCwtNi43ODE3NGMwLDAgMi42ODU4Miw2LjM4OTcgMTEuMDQzOTUsNi45OTE3YzkuNTQwNjIsMC43MDk1IDE0LjcyODc2LC00Ljg3MTA5IDE0LjcyODc2LC00Ljg3MTA5YzAsMCAtMC4wNzgxLDMuNTMyNzIgMy4yNTQ0LDQuODcxMDljMy4zMzI1LDEuMzMzIDUuNTYzOTYsLTUuOTczMzkgNS41NjM5NiwtNS45NzMzOWw1LjU2Mzk3LC0xNC45NzAyMWgwLjUwMzkxYzAsMCAwLjMwMTkyLDkuNzYzNzcgNS43ODQ0MiwxMS4zMDYzOWM1LjQ4MjUsMS41NDI2MyAxMi42MjkxNSwtMy41Nzk4MyAxMi42MjkxNSwtMy41Nzk4M2MwLDAgMS43MTI4NiwtMC45MjA1NSAxLjQxNzI0LC0zLjc0NzhjLTAuMzAxLC0yLjgwMDM4IC0yLjg3NjQ3LC0xLjc4NDY3IC0yLjg3NjQ3LC0xLjc4NDY3YzAsMCAtNC4xOTE2NiwzLjE2ODQ4IC03Ljg3MzUzLDIuODAyOThjLTMuNjgxODcsLTAuMzM4NjMgLTIuNTMwMDMsLTguMDkzOTkgLTIuNTMwMDMsLTguMDkzOTljMCwwIDAuODEyMTIsLTcuMzU1NTIgLTEuMzY0NzUsLTcuOTU3NTJjLTIuMTc2ODcsLTAuNjI4ODggLTQuODM5NiwxLjkxMDY1IC00LjgzOTYsMS45MTA2NWMwLDAgLTMuMzM3OTYsMy4zMDQ1MyAtNC45MjM1OSw3Ljg4NDAzbC0wLjQzMDQyLDAuMTI1OTdjMCwwIDAuNTE3NzYsLTguMDAzNzkgLTAuMDczNDksLTkuODM2NjdjLTAuNDMsLTAuOTEzNzUgLTQuNDA0NTYsLTAuODM1ODkgLTUuMDQ5NTYsMC43ODczNmMtMC42NDUsMS42MjMyNSAtMy44MTYyNSwxMi44NzU3MyAtNC4wMzEyNSwxNy41ODQyM2MwLDAgLTYuMjEzNTksNS4xMjQzOSAtMTEuNjQyMzQsNS45NjI4OWMtNS40Mjg3NSwwLjgzODUgLTYuNzE4NzUsLTIuNDU2NTQgLTYuNzE4NzUsLTIuNDU2NTRjMCwwIDE0LjI3MzU3LC0yLjc4MDk4IDEzLjc2Mjk0LC0xNC4yNDU4NWMtMC41MTA2MywtMTEuNDY0ODcgLTExLjg4NTA1LC03LjIxODQ2IC0xMy4xNzUwNSwtNi4yNzc4M2MtMS4yMzYyNSwwLjkxMzc1IC03LjQzOTc1LDMuNTgzNyAtOS4zNzQ3NSwxNC4zOTI4M2MtMC4wNTM3NSwwLjM2NTUgLTAuMTg4OTcsMS45NjMxMyAtMC4xODg5NywxLjk2MzEzYzAsMCAtNS42OTk2LDMuNzA4NzUgLTguODcwODUsNC43MDMxM2MwLDAgOC44Njc0OSwtMTQuNTQyMDYgLTEuOTYzMTQsLTIxLjE2NDA2Yy0zLjA2Mzc1LC0xLjc3OTEyIC01LjcyMTAyLC0wLjEzMDAxIC03LjMwNjY0LDEuMzg1NzRjMC40OTQ1LC0wLjYxODEzIDEuMDk3NjgsLTEuNDAxOTYgMS43NDI2OCwtMi4yNzgwOGM0LjEwNjUsLTUuNzc4MTMgMTAuMzc2NiwtMTYuNTQwNjQgOC4xNjc0OCwtMjYuMTI5NjRjLTEuMTY5MDYsLTQuOTU0NDEgLTMuMzA5NCwtNi42MDY4IC01LjU3NDQ2LC02LjY2NjI2ek05NS4yNDg3OCw1MC4wODYxOGMwLjQ0Mjk1LDAuMDQyMTIgMC44MTI1NSwwLjU2NjY0IDEuMDM5MywxLjc5NTE3YzAuOTY3NSw1LjIyOTg4IC02LjQ0ODIzLDE4LjY5MDA1IC05LjQ3OTczLDIzLjkxNDU1Yy0wLjc2ODYzLDEuMjczODggLTEuMjcwMjcsMi4wNjgxMiAtMS4yNzAyNywyLjA2ODEyYzAuMDE2MTMsLTAuNTQyODggMC4wOTY1OCwtMS4yNTExMiAwLjIzMDk2LC0yLjA2ODEyYzAuOTI0NSwtNS43NzgxMyA0LjE3ODIyLC0xNy4wMDY4MyA0LjE3ODIyLC0xNy4wMDY4M2MwLDAgMy4zODIwOCwtOC44ODU0IDUuMzAxNTEsLTguNzAyODh6TTIzLjU0NzEyLDgxLjMwNzM3YzAuMzM5OTMsMC4wNjE5OCAwLjYzOTk2LDAuMjA0NjcgMC44ODE4NCwwLjQzMDQyYzEuOTYxODcsMS44MzI4OCAxLjIzNTgzLDUuNTc5NzYgLTIuNDQ2MDQsOC4wNDE1MWMtMy42ODE4OCwyLjQ4MzI1IC01LjM0MzUxLDEuOTg0MTMgLTUuMzQzNTEsMS45ODQxM2MwLjE4ODEyLC03LjMyNzQ3IDQuNTI4MjMsLTEwLjg4OTkyIDYuOTA3NzIsLTEwLjQ1NjA2ek0xMjQuMjc1ODgsODEuODExMjhjMC45NDczNCwwLjA2NTg0IDEuNTIyMjIsMC43ODczNiAxLjUyMjIyLDAuNzg3MzZjMCwwIDIuNTI5MTksMi42NzIzOCAtMC4zNDY0Myw2LjY3Njc2Yy0yLjg3NTYyLDQuMDA0MzggLTcuMDk2NjgsMy43MTYzMSAtNy4wOTY2OCwzLjcxNjMxYzAsMCAtMC43OTk1MywtMi43NDc4OCAyLjE4MzU5LC04LjAxMDAxYzEuNDc4MTIsLTIuNjQ0NSAyLjc4OTk2LC0zLjIzNjI2IDMuNzM3MzEsLTMuMTcwNDF6TTkyLjk3MDcsODMuMDYwNTVjMS4yNDU3NSwwLjEzNjQzIDIuMTMxMSwwLjYwODg5IDIuMTMxMSwwLjYwODg5YzAsMCA0LjM1MjA3LDMuMjU2MTYgMC45NjU4MiwxMS45MTUyOGMtMy4zODYyNSw4LjYzNzYzIC0xMS42MzE4NCw1LjEyMzA1IC0xMS42MzE4NCw1LjEyMzA1YzAsMCAtMC45Mzg5NCwtMy4wODgxOSAxLjcyMTY4LC0xMS43NDczMmMxLjY2Mjg5LC01LjQxNTMxIDQuNzM2OTgsLTYuMTI3MjkgNi44MTMyMywtNS44OTk5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+",
    label: "Ember"
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/google-cloud-platform.png",
    label: "Google Cloud Platform"
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/gitlab.png",
    label: "Gitlab"
  },
  { icon: "https://img.icons8.com/color/48/undefined/npm.png", label: "NPM" },
  {
    icon:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6I3VuZGVmaW5lZDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2NmNDY0NyI+PHBhdGggZD0iTTExOS4wNzkzNSw1LjM3NWMtMC4yMTkxMiwwLjAwODQ4IC0wLjM4OTY5LDAuMDY5NjIgLTAuNTAzOTEsMC4xNzg0N2wtMTkuOTY3MjksMjMuNzE1MDlsLTQuMDczMjQsMTQuMDA0MzljLTIuNzY4MTMsLTAuMDkxMzcgLTUuNjI2NTMsLTAuMTI1OTggLTguNTU1OTEsLTAuMTI1OThjLTIwLjc1Mjg4LDAgLTM3LjYwNDAxLDIuMTk4NDYgLTM3LjYwNDAxLDQuOTIzNThjMCw2LjUwMzc1IDc1LjE5NzUxLDYuNTAzNzUgNzUuMTk3NTEsMGMwLC0yLjAxNTYyIC05LjAwMjI4LC0zLjcxODQxIC0yMS45ODI5MSwtNC41MjQ2NmwzLjIyMjksLTExLjUyNjg2bDE4LjY3NjAyLC0yMi40NjU4MmwwLjAzMTUsLTAuMDMxNDljMC40MTkyNSwtMC40MzUzNyAtMC4zOTkxOCwtMS43NDIwOSAtMS43MzIxOCwtMi44ODY5NmMtMC45OTk3NSwtMC44NjI2OSAtMi4wNTExNSwtMS4yODUyMSAtMi43MDg0OSwtMS4yNTk3N3pNOTMuMDAyMiw0OC43ODQ0MmwtMC4wNzM0OSwwLjIyMDQ2Yy0wLjAzMjI1LDAuMDI2ODggLTAuMDMxNDksMC4wNjIyMyAtMC4wMzE0OSwwLjA5NDQ4YzAsMC40MDMxMyAxLjYyNzk1LDAuNzM0ODYgMy42MTEzMywwLjczNDg2YzEuOTgzMzcsMCAzLjYyMTgzLC0wLjMzMTc0IDMuNjIxODMsLTAuNzM0ODZsMC4wNjI5OSwtMC4yNTE5NWMwLjUyMTM4LDAuMTg4MTIgMC44MDgzNSwwLjQwMzYzIDAuODA4MzUsMC42NTA4OGMwLDAuNjUwMzggLTIuMDE0NTMsMS4xODE2NiAtNC41MjQ2NiwxLjE1NDc4Yy0yLjQ0MDI1LDAgLTQuNDYxNjcsLTAuNDkzOTEgLTQuNDYxNjcsLTEuMTQ0MjljMCwtMC4yNzk1IDAuNDAwOTQsLTAuNTM2MjQgMC45ODY4MSwtMC43MjQzN3pNMTIzLjE1MjU5LDUwLjYzMjA4Yy05Ljk0OTEzLDUuMzA1MTMgLTY0LjI5NzQzLDUuMzQwOTkgLTc0LjI4NDE4LDAuMDczNDlsNC40MTk2OCwzOC44NzQyN2MxLjkxODg3LC02LjE5NzM3IDYuNzcxODMsLTE0LjU2NDMyIDEzLjAxNzU4LC0xNy4xMDEzMmMyLjA0Nzg4LC0wLjgzODUgNC4xMjcyNCwtMC44MzQ1NSA2LjA3ODM3LDAuMjgzNDVjMS42OTMxMiwwLjkyOTg3IDMuMTI0NjQsMi44NzkzMiAzLjI4NTg5LDMuNjUzMzJjMC4zOTIzOCwyLjAxNTYzIC0wLjY0NzYsMi44MTM0NyAtMS40NTkyMywyLjgxMzQ3Yy0wLjk3ODI1LDAgLTEuNzI1OTcsLTEuNDE4NTggLTIuMjE1MDksLTIuMjU3MDhjLTEuMzMzLC0yLjI2Mjg3IC0zLjM1MDk3LC0yLjM2MDIxIC01LjUwMDk3LC0wLjg3MTM0Yy0yLjI0Njc1LDEuNTQ4IC00LjE5ODcxLDQuMTUxNDMgLTUuNTYzOTYsNi40MTQzYy0xLjY2MDg4LDIuNzI1MTIgLTMuMDYxNCw1LjcyOTc2IC0zLjkwNTI4LDguNzM0MzhjLTAuNDg5MTIsMS43MzYxMyAtMC45MzYwOSw0LjUxNzYxIC0wLjE4ODk2LDYuMTYyMzZjMC4zMjc4NywwLjY4MjYyIDAuODEwOTUsMS4xMTI3OSAxLjU5NTcsMS4xMTI3OWMxLjYyODYyLDAgMy45OTQwNCwtMi4wNDI2NyA1LjEzMzU0LC0zLjEyODQyYzEuNDYyLC0xLjM5MjEzIDMuMzQ3ODcsLTMuNTYyOTUgNC4wNjI3NCwtNC45NTUwOGwxLjcwMDY5LC00Ljc5NzYxYzAuODQzODcsLTIuMTA3IDMuMjEyNCwtMS43MzYxMyAzLjIxMjQsMGMwLDMuMTYwNSAtMS4xOTYwMiw0LjIxNCAtMy4yNDM5LDEwLjc1Yy0xLjg4NjYzLDYuMDQxNSAtMi40Nzc1NCw3Ljk5OTUxIC0yLjQ3NzU0LDcuOTk5NTFjLTAuMjI1NzUsMC44NjUzOCAtMS4xMDY1LDIuMzIwMDcgLTIuMDQ3MTIsMi4zMjAwN2MtMC4zOTIzOCwwIC0wLjY3ODU5LC0wLjEzMDY4IC0wLjgzOTg0LC0wLjM3NzkzYy0wLjMyNzg3LC0wLjQzNTM3IC0wLjI5NDcsLTEuNjMwMzkgLTAuMjYyNDUsLTEuOTQyMTRjMC4wNjQ1LC0wLjk4OSAyLjA0NDY4LC02Ljg4MDY3IDIuMzcyNTYsLTcuODEwNTVjLTAuNjUwMzcsMC42ODI2MiAtMS4zMzE0OCwxLjM2OTg3IC0yLjA3ODYxLDIuMDQ3MTJjLTEuNzU3NjMsMS41ODAyNSAtNC41ODM3LDMuNjUzMzIgLTYuOTkxNywzLjY1MzMyYy0xLjEwNzI1LDAgLTEuODE1OTEsLTAuMjgzMTEgLTIuNDk4NTMsLTAuNzQ1MzZsMi40NjcwNCwyNC42NTk5MWMwLjY1MDM4LDEuNTQ4IDEyLjc1NDI5LDUuMzAxNTEgMjguNjkxMTYsNS4zMDE1MWMxNS45NjkxMiwwIDI4LjA2MjU0LC0zLjc4MDM5IDI4LjY4MDY2LC01LjMwMTUxbDMuNTQ4MzQsLTI5LjMwMDA1Yy0xLjg1NDM4LDEuNjEyNSAtMy45OTY1NiwzLjU5ODY0IC02LjM3MjMxLDQuNTg3NjRjLTEuNzU3NjMsMC43MTQ4OCAtNS42NTg0NSwxLjE3MTMzIC01LjY1ODQ1LC0xLjc3NDE3YzAsLTEuNjEyNSAyLjk2MjEzLC00LjU4MTAxIDQuNjgyMTMsLTYuNjU1NzZjMC40NTY4NywtMC41MjY3NSAxLjUyMjIyLC0xLjgyNjQxIDEuNTIyMjIsLTIuNTA5MDNjMCwtMC44OTc2MyAtMS45NDU5MiwtMC42OTAyNyAtMy44MDAyOSwwLjc2NjM2Yy0xLjA0Mjc1LDAuODM4NSAtMi4wMjI4NSwxLjk1OTQ0IC0yLjgzNDQ3LDMuMDEyOTRjLTEuMzk3NSwxLjg1OTc1IC0yLjE0Mjg2LDMuNDY0NjEgLTIuNzYwOTksNC43OTc2MWMtMi4wMTU2Miw0LjM5Njc1IC0xLjMzMTgyLDIuNjYzNzMgLTIuOTYwNDUsNi44MTMyM2MtMS42Mjg2Miw0LjEyMjYyIC0xLjM2MjMxLDMuNjUzMDcgLTEuNjkwMTgsNC4zMzU3Yy0wLjI5MDI1LDAuNTkxMjUgLTAuNzE1ODksMS4wODk4NyAtMS4zMDE3NiwxLjM5NjI0Yy0wLjYxODEzLDAuMzExNzUgLTEuNDYyNzUsMC4yNzYzOSAtMS45ODQxMywtMC4wOTQ0OWMtMC4yOTAyNSwtMC4xODgxMiAtMC40MzA0MiwtMC41OTA2NiAtMC40MzA0MiwtMS4xNDQyOGMwLC0wLjI3OTUgMC4wNDA0OCwtMC41NjAzNCAwLjEwNDk4LC0wLjgzOTg0YzAuNDg5MTMsLTEuODkyIDIuNTM4MDksLTUuNjAzNzggNC44ODE1OSwtMTAuNjI0MDNjMC41MjEzOCwtMS4xNDQ4NyAwLjMyMTgzLC0wLjgwNTI0IDAuMjUxOTUsLTAuNzEzODZjLTIuMDE1NjIsMS44NTk3NSAtMy41NDgwMSwyLjc1OTkgLTQuNjgyMTMsMy4yNTQ0Yy0xLjg4NjYyLDAuODA2MjUgLTQuMjI5ODcsMC44MDQ0OSAtNC43MTM2MiwtMS4yNzAyNmMtMC4wMzIyNSwtMC4xMjM2MyAtMC4wMzA3NCwtMC4yNTQzMSAtMC4wNjI5OSwtMC4zNzc5M2MtMy44Mzc3NSwyLjg0ODc1IC03LjkwMTE2LDMuNjIzODQgLTYuNDk4MjksLTIuNTA5MDNjLTEuNDk0MjUsMi41NDIzNyAtNC4xMDMzOSw0LjYxOTE0IC03LjI5NjE0LDQuNjE5MTRjLTEuMzMzLDAgLTIuMzA4NzMsLTAuNDI5ODMgLTIuNzkyNDgsLTEuNTc0NzFjLTAuNzQ3MTIsLTEuNzAzODcgMC40MjEwOSwtNC42MjI3NSAxLjQ5MDcyLC03LjM4MDEyYzAuNTUzNjIsLTEuMzkyMTMgMS4zMDk1NywtMy4wNjY5NCAyLjMyMDA3LC01LjAxODA3YzAuNTIxMzgsLTEuMDUzNSAxLjM1OTc5LC0xLjY3NTc0IDIuNDY3MDQsLTEuMzk2MjRjMC4xOTM0OSwwLjA2NDUgMC4zNjM2NSwwLjEyOTA5IDAuNTI0OSwwLjIyMDQ2YzAuODQzODcsMC41NTkgMC41MTkxMSwxLjM4NzA4IDAuMDk0NDgsMi4yMjU1OGMtMS4yMzYyNSwyLjMyMiAtMi4zMDg1Niw0LjAyNzA1IC0zLjAyMzQ0LDYuNDQ1OGMtMC4yOTAyNSwxLjAyMTI1IC0wLjY1NjU5LDIuNzkyNDggMC40ODI5MSwyLjc5MjQ4YzAuNzc5MzgsMCAxLjUyNjMzLC0wLjI1MDg2IDIuMjQ2NTgsLTAuNzQ1MzZjMS40OTQyNSwtMS4wNTM1IDIuNjk3NTgsLTIuNjMwMjIgMy42MTEzMywtNC4xNzgyMmMwLjY1MDM3LC0xLjExMjYzIDEuNDM0MjksLTIuNTY5MTcgMS44MjY2NiwtMy44MTA3OWMwLjE2MTI1LC0wLjUyNjc1IDAuMzYyMTQsLTEuMDIzMDkgMC41ODc4OSwtMS40OTA3MmMwLjM2MDEyLC0wLjc3Mzk5IDAuODQwOTMsLTEuNTc0NyAxLjY5MDE4LC0xLjU3NDdjMC40MjQ2MywwIDAuNzc1OTQsMC4xNTU1NCAxLjAzOTMxLDAuNDYxOTFjMC41NTM2MiwwLjY4MjYzIDAuNDMyMSwxLjM4Mzk4IDAuMTM2NDcsMi4xMzExMWMtMC42NTAzOCwxLjczNjEzIC0xLjUyNjMzLDMuMjg4OTEgLTIuMjQ2NTgsNS4xNzU1M2MtMC40MjQ2MiwxLjA4NTc1IC0wLjg4MTgzLDIuNDc2OTUgLTAuODgxODMsMy42MjE4M2MwLDEuMDUzNSAxLjIwNDU5LDAuODAyODEgMi4yMTUwOSwwLjM2NzQ0YzAuNzc5MzgsLTAuMzM4NjIgMS41NTkzNCwtMC44NTg5OSAyLjIxNTA5LC0xLjM4NTc0YzAuMzkyMzgsLTEuNTE1NzUgMC4yODg0LC0xLjE4MDU3IDguNTg3NCwtMjEuMTMyNTZjMC40MjQ2MywtMS4wMjEyNSAxLjIwNDc2LC0xLjQ1OTIzIDEuOTg0MTMsLTEuNDU5MjNjMC4zOTIzOCwwIDAuNzExNDMsMC4xMzE0MyAxLjAzOTMsMC4zNDY0M2MwLjU1MzYzLDAuNDAzMTMgMC41NjE2OSwxLjI2MDI3IDAuMzM1OTQsMS45MTA2NWMtMC4yMjU3NSwwLjU5MTI1IC0wLjIwMTIzLDAuNDA1NjUgLTEuNDY5NzIsMy4yNTQ0Yy0xLjY5MzEzLDMuNzQ2MzggLTIuNzk0MDgsNi40NDkxNiAtNC4yOTM3MSw5Ljg4OTE2Yy0wLjYxODEzLDEuNDI0MzcgLTIuNTAxNDcsNS44NTQyMSAtMi44MjM5Nyw2LjkwNzcxYy0wLjE5MzUsMC42ODI2MiAtMC40MjcwNiwxLjc5NTE2IDAuMzI1NDQsMS43OTUxNmMxLjc1NzYzLDAgNi4yODAzNSwtNC4wNjA2NSA3LjUxNjYsLTUuMjcwMDJjMC4wNjQ1LC0wLjA5MTM3IDAuMTY0OTUsLTAuMTI0NDYgMC4yOTM5NSwtMC4xODg5NmMwLjE5MzUsLTAuNTkxMjUgMC4zODQ2NSwtMS4xNDE2OCAwLjU0NTksLTEuNzAwNjhjMC40NTY4OCwtMS4xNzcxMyAwLjg4MjkzLC0yLjU0OTYgMS43MzIxOCwtMy41MDYzNWMwLjI1OCwtMC4zMTE3NSAwLjU0ODg0LC0wLjQ5MzQxIDAuODcxMzQsLTAuNDkzNDFjMC45MDgzOCwwIDEuMzY0NzQsMC4zNjgwMiAxLjM2NDc0LDEuMjM4NzdjMCwwLjMzODYyIC0wLjIyMjU2LDEuNTgyNTIgLTAuMzU2OTMsMS45MjExNGMwLjQ1Njg4LC0wLjQ2MjI1IDAuOTM3ODYsLTAuOTIzNDkgMS40NTkyMywtMS4zODU3NGM0Ljg4MDUxLC00LjMwNTM4IDguMzU2NDUsLTIuMTA4NTIgOC4zNTY0NSwwLjA2Mjk4YzAsMi4yODk3NSAtMi44OTE2Niw1LjQ3NTI4IC00LjQ4MjY2LDcuMjQzNjVjLTAuNTIxMzcsMC41OTEyNSAtMS41OTQ5NSwxLjY3MjM4IC0xLjYyNzIsMS45ODQxM2MwLDAuNDAzMTMgMC4yODkyNCwwLjU2NjkgMC43MTM4NywwLjU2NjljMC42NTAzOCwwIDIuMDgyMTQsLTEuMDg4MzUgMi42MDM1MiwtMS40NTkyM2MxLjYyODYyLC0xLjIwOTM4IDMuODMxODcsLTMuMDY2NDQgNS4zOTU5OSwtNC4zNjcxOXpNNTguNzQ3MDcsMTI5LjE2Nzk3bDQuODUwMDksNy44NzM1NGwxLjg4OTY1LDI0LjU5NjkyYzAsMi43NTczNyA5LjIwMzkzLDQuOTg2NTcgMjAuNTIzNjgsNC45ODY1N2MxMS4zMTk3NSwwIDIwLjUyMzY4LC0yLjIyOTIgMjAuNTIzNjgsLTQuOTg2NTdsMS41MDEyMiwtMjQuODQ4ODhsNC41NzcxNSwtNy42MjE1OGMtMTIuODgzODcsNS4xNzYxMyAtNDAuNDYwMjMsNS4zNTg4OCAtNTMuODY1NDgsMHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
    label: "Gulp"
  },
  {
    icon: "https://img.icons8.com/color/48/undefined/webpack.png",
    label: "Webpack"
  }
];
const Skills = () => {
  return (
    <section className="section" name="skills">
      <div className="container">
        <h3 className="title">Skills</h3>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index} className="skills-list-item">
              <img src={skill.icon} alt="icon" />
              <div>{skill.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
