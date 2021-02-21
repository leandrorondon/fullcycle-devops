package main

import "fmt"

func main() {
	fmt.Println(Soma(10, 10))
}

// Soma soma dois números
func Soma(a int, b int) int {
	return a + b
}
