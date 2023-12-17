package main

import (
	"fmt"
	"testing"
	"time"
)

// Logger is a test implementation of your Logger type
type TestLogger struct {
	Output string
}

func (l *TestLogger) log(message string) {
	l.Output += message + "\n"
}

// TestCuireRiz tests the cuireRiz function
func TestCuireRiz(t *testing.T) {
	// Capture standard output
	logger := TestLogger{}

	// Call cuireRiz function
	go cuireRiz("type", 100)

	// Fast-forward the time by 10 seconds
	time.Sleep(10 * time.Second)

	// Verify the output
	expectedOutput := "Début de la cuisson pour 100g de riz type...\nVotre Riz est prêt !"
	actualOutput := logger.Output

	fmt.Printf("Expected output:\n%s\n", expectedOutput)
	fmt.Printf("Got:\n%s\n", actualOutput)

	if actualOutput != expectedOutput {
		t.Errorf("Test failed. See the output for details.")
	}
}
