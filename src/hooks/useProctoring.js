"use client";
import { useEffect, useState } from 'react';

export function useProctoring({ active = true, onViolation }) {
    const [warnings, setWarnings] = useState([]);

    useEffect(() => {
        if (!active) return;

        // 1. Fullscreen Enforcement
        // We can't force fullscreen without user gesture, but we can monitor it.
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                handleViolation('Exited Fullscreen');
            }
        };

        // 2. Tab/Window Focus
        const handleVisibilityChange = () => {
            if (document.hidden) {
                handleViolation('Tab/Window Switched');
            }
        };

        // 3. Right Click Disable
        const handleContextMenu = (e) => {
            e.preventDefault();
            // Optional: Don't log right click as violation, just prevent it
            // handleViolation('Right Click Attempted'); 
        };

        // 4. Keyboard Shortcuts (Copy/Paste, Alt-Tab detection attempt)
        const handleKeyDown = (e) => {
            // Block Ctrl+C, Ctrl+V, Ctrl+A, PrintScreen
            if (
                (e.ctrlKey && ['c', 'v', 'a', 'p', 's', 'u'].includes(e.key.toLowerCase())) ||
                e.key === 'PrintScreen' ||
                e.key === 'F12'
            ) {
                e.preventDefault();
                handleViolation(`Restricted Keystroke: ${e.ctrlKey ? 'Ctrl+' : ''}${e.key}`);
            }
        };

        // 5. Selection Disable
        const handleSelectStart = (e) => {
            e.preventDefault();
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('selectstart', handleSelectStart);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('selectstart', handleSelectStart);
        };
    }, [active]);

    const handleViolation = (type) => {
        const timestamp = new Date().toISOString();
        console.warn(`[PROCTORING] Violation: ${type} at ${timestamp}`);

        setWarnings(prev => {
            const newWarnings = [...prev, { type, timestamp }];
            // Trigger callback if provided
            if (onViolation) onViolation(type, newWarnings.length);
            return newWarnings;
        });
    };

    const requestFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => console.error("Fullscreen error:", err));
        }
    };

    return {
        warnings,
        requestFullscreen
    };
}
