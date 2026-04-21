import { z } from 'zod';

export const ExtractRequestSchema = z.object({
	text: z.string().min(1),
});

export const ExectResponseSchema = z.object({
	name: z.string().optional(),
	city: z.string().optional(),
});

export type ExtractRequestDTO = z.infer<typeof ExtractRequestSchema>;
export type ExtractResponseDTO = z.infer<typeof ExectResponseSchema>;
