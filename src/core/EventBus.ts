export type Callback = (...args: unknown[]) => void;

export default class EventBus {
    private listeners: Record<string, Callback[]> = {};

    on(event: string, callback: Callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event]!.push(callback);
    }

    off(event: string, callback: Callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event]!.filter((listener) => listener !== callback);
    }

    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event]!.forEach((listener) => {
            listener(...args);
        });
    }
}
