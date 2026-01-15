export type TransactionType = 'income' | 'expense';

export interface Category {
    id: string;
    name: string;
    icon: string; // We'll use Lucide icon names or similar
    color: string; // Tailwind color class or hex
    type: TransactionType;
}

export interface AppState {
    transactions: Transaction[];
    categories: Category[];
    fetchData: () => Promise<void>;
    addTransaction: (transaction: Transaction) => Promise<void>;
    updateTransaction: (id: string, updates: Partial<Transaction>) => Promise<void>;
    deleteTransaction: (id: string) => Promise<void>;
    addCategory: (category: Category) => Promise<void>;
    updateCategory: (id: string, updates: Partial<Category>) => Promise<void>;
    deleteCategory: (id: string) => Promise<void>;
    getTransactionsByDate: (date: Date) => Transaction[];
}

export interface Transaction {
    id: string;
    amount: number;
    categoryId: string;
    date: string; // ISO string
    note?: string;
    type: TransactionType;
}
